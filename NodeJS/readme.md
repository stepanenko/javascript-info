
### To Do Next:

- create `nodejs-apps` repo and move this one there as `nodejs-apps/NodeJS Practice`

## [Introduction to Node.js](https://nodejs.dev/)

## Semantic Versioning (major.minor.patch) guide:
- `~` if you write `~0.13.0`, you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.
- `^` if you write `^0.13.0`, you want to update patch and minor releases: 0.13.1, 0.14.0 and so on.
- `*` if you write `*`, that means you accept all updates, including major version upgrades.
- `>` you accept any version higher than the one you specify
- `>=` you accept any version equal to or higher than the one you specify
- `<=` you accept any version equal or lower to the one you specify
- `<` you accept any version lower to the one you specify
- `-` you accept a range of versions. Example: `2.1.0 - 2.6.2`
- `||` you combine sets. Example: `< 2.1 || > 2.6`
- `no symbol` you accept only that specific version you specify
- `latest` you want to use the latest version available

## NPM commands:
- `npm list` see the latest version of all the npm package installed, including their dependencies
> You can also just open the `package-lock.json` file, but this involves some visual scanning.
- `npm list --depth=0` get only your top-level packages (basically, the ones you told npm to install and you listed in the package.json)
- `npm list [package_name]` get the version of a specific package by specifying the name
- `npm view [package_name] version` see what's the latest available version of the package on the npm repository
- `npm view [package_name] versions` listing all the previous version of a package
- `npm i [package_name]@[version]` install an old version of an npm package ( e.g npm install cowsay@1.2.0 )
- `npm outdated` discover new releases of the packages
- `npm update` if there is a new minor or patch release the installed version is updated
> `npm update` won't update the version of Major releases because they introduce breaking changes. To update to a new major version all the packages, install the `npm-check-updates` package globally. Then run it `ncu -u` - this will upgrade all the version hints in the package.json file so npm can install the new major version. Run `npm update`.
- `npm uninstall [package_name]` uninstall a package, add -S flag or --save to remove it also from package.json
- `npm install --production` to avoid installing development dependencies
