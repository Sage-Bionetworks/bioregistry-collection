import requests
import yaml
import re
import sys
from collections import Counter

def fetch_regex(prefix):
    url = f"https://bioregistry.io/api/registry/{prefix}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data.get("pattern", ""), True  # Return pattern and "prefix exists" flag
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

def generate_typescript_file():
    with open("collection.yaml", "r") as file:
        collection = yaml.safe_load(file)

    resources = collection["00000016"]["resources"]
    duplicates = find_duplicates(resources)
    if duplicates:
        with open("duplicates.txt", "w") as file:
            file.write("\n".join(duplicates))

    ts_content = """// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

const onMatch = (value: string) => `https://bioregistry.io/${value}`;

export const bioregistryRules = [
"""

    missing_patterns = []
    invalid_prefixes = []

    for resource in resources:
        regex, prefix_exists = fetch_regex(resource)
        if not prefix_exists:
            invalid_prefixes.append(resource)
            continue
        if regex:
            trimmed_regex = trim_regex(regex)
            if trimmed_regex:
                ts_content += f"  {{\n    regex: /({resource}:{trimmed_regex})/,\n    onMatch,\n  }},\n"
            else:
                missing_patterns.append(resource)
        else:
            missing_patterns.append(resource)

    ts_content += "]\n"

    with open("bioregistry.ts", "w") as file:
        file.write(ts_content)

    has_issues = False
    if missing_patterns:
        with open("missing_patterns.txt", "w") as file:
            file.write("\n".join(missing_patterns))
        has_issues = True
    if duplicates:
        has_issues = True
    if invalid_prefixes:
        with open("invalid_prefixes.txt", "w") as file:
            file.write("\n".join(invalid_prefixes))
        has_issues = True

    return not has_issues

if __name__ == "__main__":
    success = generate_typescript_file()
    sys.exit(0 if success else 1) 