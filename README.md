# Bioregistry Collection

This repository contains a collection of bioregistry resources and automated tools to maintain them.

## Automated Checks

This repository uses GitHub Actions to automatically:

1. Validate resources against the bioregistry.io API
2. Check for:
   - Missing regex patterns
   - Duplicate resources
   - Invalid prefixes
3. Alphabetize the resources list on every push to main

## Contributing

### Adding New Resources

To add a new resource to the collection:

1. Edit `collection.yaml`
2. Add the resource prefix to the `resources` list
3. Create a pull request

The automated checks will:
- Verify the prefix exists in bioregistry.io
- Check for a valid regex pattern
- Ensure no duplicates are introduced
- Alphabetize the list if your PR is merged

### Common Issues

If your PR fails, check the PR comments for:

1. **Missing Regex Patterns**: Some resources might not have regex patterns defined in bioregistry.io
2. **Duplicate Resources**: The same prefix appears multiple times in the list
3. **Invalid Prefixes**: The prefix is not registered in bioregistry.io

### Local Development

To test changes locally:

1. Install dependencies:
   ```bash
   pip install requests pyyaml
   ```

2. Run the validation script:
   ```bash
   python generate_bioregistry_rules.py
   ```

This will:
- Generate `bioregistry.ts` with the link rules
- Create error files if any issues are found:
  - `missing_patterns.txt`
  - `duplicates.txt`
  - `invalid_prefixes.txt`
