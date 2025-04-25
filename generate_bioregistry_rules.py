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

def escape_regex(regex):
    # Escape special characters in regex pattern
    return regex.replace("\\", "\\\\")

def find_duplicates(resources):
    # Count occurrences of each resource
    counts = Counter(resources)
    # Return only resources that appear more than once
    return [resource for resource, count in counts.items() if count > 1]

def generate_typescript_file():
    # Read the collection.yaml file
    with open("collection.yaml", "r") as file:
        collection = yaml.safe_load(file)

    resources = collection["00000016"]["resources"]
    
    # Check for duplicates
    duplicates = find_duplicates(resources)
    if duplicates:
        with open("duplicates.txt", "w") as file:
            file.write("\n".join(duplicates))

    # Start generating the TypeScript file
    ts_content = """// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

export const bioregistryRules = [
"""

    # Track resources with missing patterns and invalid prefixes
    missing_patterns = []
    invalid_prefixes = []

    # Process each resource
    for resource in resources:
        regex, prefix_exists = fetch_regex(resource)
        if not prefix_exists:
            invalid_prefixes.append(resource)
            continue
        
        if regex:
            trimmed_regex = trim_regex(regex)
            if trimmed_regex:
                escaped_regex = escape_regex(trimmed_regex)
                ts_content += f"""  {{
    regex: /({resource}:{escaped_regex})/,
    onMatch: (value: string) => `https://bioregistry.io/${{value}}`,
  }},
"""
            else:
                missing_patterns.append(resource)
        else:
            missing_patterns.append(resource)

    # Close the array
    ts_content += "]\n"

    # Write the TypeScript file
    with open("bioregistry.ts", "w") as file:
        file.write(ts_content)

    # If there are issues, write them to files for the workflow
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

    return not has_issues  # Return True if no issues, False if there are issues

if __name__ == "__main__":
    success = generate_typescript_file()
    sys.exit(0 if success else 1) 