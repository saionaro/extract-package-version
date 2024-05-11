# extract-package-version

Allows you to get the npm version of the package in your Github Actions workflow

## Usage

### Inputs

- `path`: The directory where package.json can be found (defaults to root of repo)

### Outputs

- `version`: The version of current NPM package

### Example workflow - get NPM version

```yaml
on: push

name: Create Build

jobs:
  build:
    name: Create Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: saionaro/extract-package-version@v1.2.1
        id: package_ver
      # from now you can access the version
      - run: echo ${{ steps.package_ver.outputs.version }}
```

### Example workflow - get NPM version of subdirectory (useful in monorepos)

```yaml
on: push

name: Create Build

jobs:
  build:
    name: Create Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: saionaro/extract-package-version@v1.2.1
        id: package_ver
        with:
          path: mysubdir
      # from now you can access the version
      - run: echo ${{ steps.package_ver.outputs.version }}
```
