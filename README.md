# eslint-config-digital-scientists

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Digital Scientists](http://www.digital-scientists.com/) developers

## This is a WIP and not ready for use

## Installation

### Local

It's recommended to always install linting engines and configs locally, since supported rules and config specifics can change over time and may cause inconsistencies if installed globally and updated over time.

```sh
npm install --save-dev eslint eslint-config-digital-scientists
```

In your local `.eslintrc.{js,json}` file:

```json
{
  "extends": "digital-scientists",
  "root": true
}
```

Note that the `eslint-config-` portion of the module name is assumed by ESLint.

### Integrating With `prettier`

In order to user `prettier` with `ESLint` and `eslint-config-digital-scientists`, you will need to do the following:

#### Install dependencies
```
npm install --save-dev \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier
```

#### Modify `.eslintrc.{js,json}`

```
{
  "extends": [
    "digital-scientists",
    "plugin:prettier/recommended"
    "prettier/react"
  ]
  
  "plugins": [
    "prettier"
  ]
}
```

### For Babel-Transpiled Projects

This config's peer dependencies (eslint, eslint-plugin-react) enable linting relatively modern files including JSX components. If you find that the linter fails to understand some early-stage ES features, you can enable parsing using Babel instead of ESLint's default parser. Install `babel-eslint` and set the `parser` option of your config:

```sh
npm install babel-eslint --save-dev
```

```json
{
	"parser": "babel-eslint",
	"extends": "digital-scientists",
	"root": true
}
```

## Extending

Any [rules](http://eslint.org/docs/rules/) added to your global or local `.eslintrc.json` files will override the rules defined by this package. For example:

```json
{
  "extends": "digital-scientists",
  "rules": {
    "semi": [1, "always"]
  }
}
```

This turns on enforcing the use of semicolons, a rule which is silenced by default in the current version of the `eslint-config-digital-scientists` package.

## Background

The [ESLint](http://http://eslint.org/) linting system is a popular one for its support of ES6 syntax, pluggable [rules](http://eslint.org/docs/rules/), automatic rule names in warning messages, and [shareable](http://eslint.org/docs/developer-guide/shareable-configs) / [extendable](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) config files.

Because it defaults to supporting multiple environments (e.g. Node, browsers, Jasmine, Mocha, etc.) it is probably not suitable for general production, where one might want a finer-grained and more restrictive config. However it is easy to override and extend this base config with custom rules, [as explained above and in the ESLint docs](http://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).

## License

MIT

