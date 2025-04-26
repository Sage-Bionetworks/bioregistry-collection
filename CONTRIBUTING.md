# Contributing to Bioregistry Collection

This document provides guidelines for contributing to this repository, including updating the upstream bioregistry repository with our collection.

## Adding New Resources

To add a new resource to the collection:

1. Fork this repository
2. Edit `collection.yaml`
3. Add your resource prefix to the `resources` list
4. Create a pull request

Our automated validation will check that:
- The prefix exists in bioregistry.io
- The prefix has a valid regex pattern
- The prefix isn't already in the list
- The prefix is not deprecated
- The prefix has a resolver (`uri_format`)

## Submitting Updates to Upstream Bioregistry

To submit your updates to the upstream bioregistry repository, follow these steps:

### 1. Run the Update Collections Workflow

1. Go to the Actions tab in this repository
2. Select the "Update Bioregistry Collections" workflow
3. Click "Run workflow" on the main branch
4. Review and merge the PR that gets created with the updated `collections.json`

### 2. Create a Fork of the Upstream Repository

1. Visit https://github.com/biopragmatics/bioregistry
2. Click the "Fork" button to create a fork in your personal account or organization

### 3. Update the Collections File in Your Fork

1. In your fork, navigate to `src/bioregistry/data/collections.json`
2. Click the pencil icon to edit the file
3. Either:
   - Use the contents of our local `collections.json` file (created by the workflow), or
   - Manually find and update just our collection (ID: 0000016)
4. Commit the changes to a new branch

### 4. Create a Pull Request to Upstream

1. GitHub will prompt you to create a pull request after committing changes
2. Fill in the pull request description explaining the changes:
   - What resources were added or updated
   - Why these resources are important to include
3. Submit the pull request

### 5. Follow Up

- Respond to any feedback or questions from the maintainers
- Make any requested changes to your pull request
- Once approved and merged, you can update our local collection to reflect the changes

## Troubleshooting

If you encounter any issues during this process, please:

1. Check that our local validation passes
2. Ensure the resources you're adding conform to bioregistry.io standards
3. Open an issue in this repository if you need assistance 