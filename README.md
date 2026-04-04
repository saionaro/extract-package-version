# extract-package-version

GitHub Action that reads a `package.json` file and exposes its `version` field as a workflow output.

This is useful when you want to reuse the package version for tagging, naming build artifacts, publishing, or release automation.

## What it does

- Reads `package.json` from the repository root by default
- Supports packages inside subdirectories, which is useful for monorepos
- Exposes the detected version as `steps.<id>.outputs.version`

## Usage

Make sure your workflow checks out the repository before running the action.

```yaml
on: push

name: Build

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Extract package version
        id: package_version
        uses: saionaro/extract-package-version@v1.4.0

      - name: Print version
        run: echo "${{ steps.package_version.outputs.version }}"
```

## Inputs

| Name   | Required | Default         | Description                            |
| ------ | -------- | --------------- | -------------------------------------- |
| `path` | No       | Repository root | Directory that contains `package.json` |

## Outputs

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| `version` | The value of the `version` field from `package.json` |

## Monorepo Example

If your package lives in a subdirectory, pass that directory through `path`.

```yaml
on: push

name: Build

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Extract package version
        id: package_version
        uses: saionaro/extract-package-version@v1.4.0
        with:
          path: packages/my-package

      - name: Use version
        run: echo "Version: ${{ steps.package_version.outputs.version }}"
```

## Notes

- `path` should point to the directory containing `package.json`, not to the file itself
- The action fails if the file cannot be read or if `package.json` does not contain a valid `version`
