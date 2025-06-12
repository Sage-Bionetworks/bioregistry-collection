import requests
import yaml
import re
import sys
from collections import Counter

def fetch_registry_entry(prefix):
    url = f"https://bioregistry.io/api/registry/{prefix}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data, True  # Return payload and "prefix exists" flag
    elif response.status_code == 404:
        data = response.json()
        if data.get("detail", "").startswith("Prefix not found:"):
            return None, False  # Return None and "prefix doesn't exist" flag
    return None, True  # Return None but "prefix exists" flag for other cases

def trim_regex(regex):
    if not regex:
        return None
    if regex.startswith("^"):
        regex = regex[1:]
    if regex.endswith("$"):
        regex = regex[:-1]
    return regex

def find_duplicates(resources):
    counts = Counter(resources)
    return [resource for resource, count in counts.items() if count > 1]

def run_interference_test(rules):
    """
    Identifies which rules with alternatives ('|') cause cross-interference.
    It does this by testing each rule with a '|' in isolation to see if its
    "broken" form (without a non-capturing group) incorrectly matches any
    other rule's example.
    """
    print("\nRunning Isolated Cross-Interference Test...")
    
    rules_with_alts = [r for r in rules if '|' in r['trimmed_regex'] and r['example']]
    all_examples = {f"{r['prefix']}:{r['example']}" for r in rules if r['example']}
    
    offending_prefixes = set()

    for rule_to_test in rules_with_alts:
        prefix = rule_to_test['prefix']
        trimmed_regex = rule_to_test['trimmed_regex']
        
        # The broken pattern simulates a loose alternative by not anchoring the regex.
        try:
            broken_pattern = re.compile(f"{prefix}:{trimmed_regex}")
        except re.error:
            # This pattern is so broken it can't even compile, definitely an offender.
            offending_prefixes.add(prefix)
            continue

        # Check this broken pattern against all other examples using search().
        for example_curie in all_examples:
            if example_curie.startswith(f"{prefix}:"):
                continue

            if broken_pattern.search(example_curie):
                # This rule's broken pattern incorrectly matched another rule's example.
                offending_prefixes.add(prefix)
                # Once confirmed as an offender, no need to check more examples.
                break
    
    print("\n--- Cross-Interference Test Report ---")
    if offending_prefixes:
        print("The following prefixes have a structure that causes cross-interference and require grouping:")
        for p in sorted(list(offending_prefixes)):
            print(f"- {p}")
    else:
        print("No cross-interference issues detected.")
    print("--------------------------------------")
    return offending_prefixes

def run_resolution_test(rules):
    """
    Tests that the example for each rule resolves to a valid bioregistry.io URL.
    """
    print("\nRunning URL Resolution Test...")
    rules_with_examples = [r for r in rules if r['example']]
    total = len(rules_with_examples)
    failures = []
    
    # Suppress only the single InsecureRequestWarning from urllib3 needed for `verify=False`
    requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)
    
    headers = {'User-Agent': 'bioregistry-collection-test-suite/1.0'}
    session = requests.Session()
    session.headers.update(headers)

    print("NOTE: Disabling SSL verification for URL resolution checks.")

    for i, rule in enumerate(rules_with_examples):
        prefix = rule['prefix']
        example_curie = f"{prefix}:{rule['example']}"
        url = f"https://bioregistry.io/{example_curie}"
        
        # Print progress on a single line
        print(f"[{i + 1}/{total}] Checking: {url.ljust(80)}", end='\r', flush=True)

        try:
            # Use a HEAD request for efficiency, disable SSL verification
            response = session.head(url, timeout=15, allow_redirects=True, verify=False)
            if response.status_code >= 400:
                failures.append(f"FAILURE ({response.status_code}): URL for prefix '{prefix}' failed: {url}")
        except requests.RequestException as e:
            failures.append(f"FAILURE (Request Error): URL for prefix '{prefix}' failed: {url} ({type(e).__name__})")
            
    # Print a newline to move past the progress bar
    print('\n')

    print("\n--- URL Resolution Test Report ---")
    if failures:
        print(f"Found {len(failures)} resolution failures:")
        for f in sorted(failures):
            print(f)
    else:
        print("All example URLs resolved successfully.")
    print("----------------------------------")
    print("Note: URL resolution failures are informational only and do not affect the script's exit code.")
    return failures

def generate_typescript_file():
    with open("collection.yaml", "r") as file:
        data = yaml.safe_load(file)
        resources = data["00000016"]["resources"]

    duplicates = find_duplicates(resources)
    if duplicates:
        with open("duplicates.txt", "w") as file:
            file.write("\n".join(duplicates))

    missing_patterns = []
    invalid_prefixes = []
    missing_resolver = []
    deprecated_resources = []
    all_rules_data = []

    # Pass 1: Gather all rule data from the API.
    for resource in resources:
        entry, prefix_exists = fetch_registry_entry(resource)
        if not prefix_exists:
            invalid_prefixes.append(resource)
            continue
        if entry is not None:
            # Check for resolver (uri_format must exist and be non-empty)
            if not entry.get("uri_format"):
                missing_resolver.append(resource)
            # Check for deprecation (warning only)
            if entry.get("deprecated", False):
                deprecated_resources.append(resource)
        
        regex = entry.get("pattern", "")
        if regex:
            trimmed_regex = trim_regex(regex)
            if trimmed_regex:
                # Store all necessary data for testing and generation.
                all_rules_data.append({
                    "prefix": resource,
                    "trimmed_regex": trimmed_regex,
                    "example": entry.get("example")
                })
            else:
                missing_patterns.append(resource)
        else:
            missing_patterns.append(resource)

    # --- Testing Phase ---
    # Identify exactly which prefixes require their regex to be grouped.
    offending_prefixes = run_interference_test(all_rules_data)

    # --- Generation Phase ---
    # Build the TypeScript file content, applying the fix only where needed.
    ts_content = ""  # Reset and build from scratch
    for rule in all_rules_data:
        resource = rule['prefix']
        trimmed_regex = rule['trimmed_regex']
        
        # Start with the base regex string
        final_regex_str = f"{resource}:{trimmed_regex}"

        # Conditionally apply the non-capturing group ONLY to offending rules.
        if resource in offending_prefixes:
            final_regex_str = f"{resource}:(?:{trimmed_regex})"
        
        # The entire CURIE pattern must be a single capturing group for Linkify-it
        final_regex_str = f"({final_regex_str})"

        escaped_regex = re.sub(r'(?<!\\)/', r'\\/', final_regex_str)
        ts_content += f"  {{\n    regex: /{escaped_regex}/,\n    onMatch,\n  }},\n"

    with open("bioregistry.ts", "w") as file:
        # Prepend the header and append the footer to the generated content
        file_header = """// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

const onMatch = (value: string) => `https://bioregistry.io/${value}`;

export const bioregistryRules = [
"""
        file_footer = "];\n"
        file.write(file_header + ts_content + file_footer)

    # Run the other diagnostic test
    run_resolution_test(all_rules_data)

    has_issues = False
    if missing_patterns:
        with open("missing_patterns.txt", "w") as file:
            file.write("\n".join(missing_patterns))
        has_issues = True
    if invalid_prefixes:
        with open("invalid_prefixes.txt", "w") as file:
            file.write("\n".join(invalid_prefixes))
        has_issues = True
    if missing_resolver:
        print("Missing resolver for the following resources:")
        for r in missing_resolver:
            print(r)
    if deprecated_resources:
        print("Deprecated resources detected:")
        for r in deprecated_resources:
            print(r)

    # Return status based only on file generation issues, not test results
    return not has_issues, missing_patterns, invalid_prefixes, duplicates, missing_resolver, deprecated_resources

if __name__ == "__main__":
    success, missing_patterns, invalid_prefixes, duplicates, missing_resolver, deprecated_resources = generate_typescript_file()
    sys.exit(0 if success else 1) 