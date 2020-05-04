
## [NodeJS Quick Start](https://nodejs.dev/)

### semver info:
- `~` if you write `~0.13.0`, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
- `^` if you write `^0.13.0`, you want to update patch and minor releases: 0.13.1, 0.14.0 and so on.
- `*` if you write `*`, that means you accept all updates, including major version upgrades.
- `>` you accept any version higher than the one you specify
- `>=` you accept any version equal to or higher than the one you specify
- `<=` you accept any version equal or lower to the one you specify
- `<` you accept any version lower to the one you specify
- `no symbol` you accept only that specific version you specify
- `latest` you want to use the latest version available
> And you can combine most of the above in ranges, like this: `1.0.0 || >=1.1.0 <1.2.0`, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.

### npm commands:
- `npm list` see the latest version of all the npm package installed, including their dependencies
> You can also just open the `package-lock.json` file, but this involves some visual scanning.
- `npm list --depth=0` get only your top-level packages (basically, the ones you told npm to install and you listed in the package.json)
- `npm list [package_name]` get the version of a specific package by specifying the name
- `npm view [package_name] version` see what's the latest available version of the package on the npm repository
