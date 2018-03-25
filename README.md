# eslint-config-digital-scientists

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Digital Scientists](http://www.digital-scientists.com/) developers

## This is a WIP and not ready for use

## Installation

### Global

Global installation is recommended for Digital Scientists developers. To install or upgrade the config along with its peer dependencies:

```sh
npm install -g \
  eslint \
  prettier \
  babel-eslint \
  eslint-config-digital-scientists \
  eslint-plugin-prettier \
  eslint-config-prettier \
  eslint-plugin-flow \
  eslint-plugin-react \
  eslint-plugin-react-native
```

In your global `~/.eslintrc.json` file:

```json
{
  "extends": "digital-scientists"
}
```

Note that the `eslint-config-` portion of the module name is assumed by ESLint.

### Local

A specific project can extend this definition by including `eslint eslint-config-digital-scientists eslint-plugin-react` as saved dev-dependencies, and defining a local `.eslintrc.json`. Project-level eslintrc files are recommended to be set as `root`, which prevents users' global configs from producing inconsistent results:

```json
{
	"extends": "digital-scientists",
	"root": true
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

