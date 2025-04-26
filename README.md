# Bioregistry Collection

A Sage-curated list of bioregistry.io prefixes used on Synapse.org. This repository maintains a collection of bioregistry resources and provides automated tools to validate and maintain them.

## Automated Workflows

This repository uses GitHub Actions to automate several processes:

### PR Validation (`update_bioregistry.yml`)
When a pull request is opened against the main branch, the workflow:
1. Validates all resources against the bioregistry.io API
2. Checks for:
   - Missing regex patterns in bioregistry.io
   - Duplicate resources in collection.yaml
   - Invalid/unregistered prefixes
   - Resources missing a resolver (`uri_format`)
   - Deprecated resources
3. Reports any issues as comments on the PR

### Collection Maintenance (`maintain_collection.yml`)
When changes are pushed to the main branch, two automated tasks run:
1. **Bioregistry Rules Generation**
   - Fetches current regex patterns from bioregistry.io
   - Generates/updates `bioregistry.ts` with link rules
   - Opens a pull request with any changes

2. **Resource Alphabetization**
   - Sorts the resources list in `collection.yaml` alphabetically
   - Opens a pull request with any changes

## Contributing

### Adding New Resources

To add a new resource to the collection:

1. Fork this repository
2. Edit `collection.yaml`
3. Add your resource prefix to the `resources` list
4. Create a pull request

The automated validation will check that:
- The prefix exists in bioregistry.io
- The prefix has a valid regex pattern
- The prefix isn't already in the list
- The prefix is not deprecated
- The prefix has a resolver (`uri_format`)

### Troubleshooting PR Failures

If your PR fails validation, check the PR comments for:

1. **Missing Regex Patterns**
   - The prefix exists in bioregistry.io but has no regex pattern
   - Solution: Add a regex pattern to the prefix in bioregistry.io or remove from PR

2. **Duplicate Resources**
   - The same prefix appears multiple times in collection.yaml
   - Solution: Remove the duplicate entries

3. **Invalid Prefixes**
   - The prefix is not registered in bioregistry.io
   - Solution: Register the prefix at bioregistry.io first

4. **Missing Resolver**
   - The prefix does not have a resolver (`uri_format`) in bioregistry.io
   - Solution: Add a resolver to the prefix in bioregistry.io or remove from PR

5. **Deprecated Resources**
   - The prefix is marked as deprecated in bioregistry.io
   - Solution: Remove the deprecated prefix from the PR or replace it with a valid one
