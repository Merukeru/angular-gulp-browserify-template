# Yarn CLI commands

https://yarnpkg.com/en/docs/cli/

## yarn install
Installs all the dependencies defined in a package.json file

`yarn` or `yarn install`

## yarn add
Adds a package to use in your current package.

https://yarnpkg.com/en/docs/cli/add


```
yarn add package-name
yarn add package-name@1.2.3
yarn add package-name@tag
yarn add https://my-project.org/package.tgz
yarn add file:/path/to/local/folder
```

Global commands
```sh
yarn global add package-name
```

Save packages
https://yarnpkg.com/en/docs/dependency-types
```sh
yarn add package-name [--dev/-D]
yarn add package-name [--peer/-P]
yarn add package-name [--optional,-O]
yarn add package-name [--exact/-E]
yarn add package-name [--tilde/-T]
```

## yarn remove

## yarn upgrade
Remove node all node modules and reinstall them.
```yarn upgrade```

Simple way to upgrade dependencies.
```
yarn upgrade-interactive
```

## yarn outdated
```
yarn outdated
```

## cache clean
```
yarn cache clean
```

## yarn licenses
Inspect the licenses of project dependencies.
```
yarn licenses ls
```

## yarn why
Identify why `<module-name>` is installed.
```
yarn why <module_name>
```
