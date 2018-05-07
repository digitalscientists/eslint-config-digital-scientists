# eslint-config-digital-scientists

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Integrating ESLint with Your Editor (real-time linting)](#integrating-eslint-with-your-editor--real-time-linting-)
* [Integrating ESLint With Prettier](#integrating-eslint-with-prettier)
* [Integrating Prettier with Your Editor (autoformatting)](#integrating-prettier-with-your-editor--autoformatting-)
* [Extending](#extending)
* [Background](#background)
* [License](#license)

---

## Description

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for ECMAScript 2015+, React (and React Native), and Redux projects at [Digital Scientists](http://www.digitalscientists.com/).

This config offers rules that are intended to help you write better code. It does this by

* helping you catch minor bugs
* alerting you to various anti-patterns you've stumbled upon, which may degrade the performance, readability, or maintainability of your system
* enforcing various conventions to encourage greater consistency of style and organization, alleviating some of the cognitive load of reading code

## Installation

### Local Installation

It's recommended that you install linting/formatting engines, configs, and their peer dependencies **locally** to a project and tracked in source control. The rules and config parameters can change over time and may cause inconsistencies across projects if everyone on your team is relying on their own globally installed version.

Install config and peer dependencies:

```sh
npm install --save-dev --save-exact \
  eslint \
  eslint-config-digital-scientists \
  babel-eslint
```

### Global Installation

But you may also install it them globally if you'd like them to be your default linting setup when working on a project without any linting system installed locally.

```
npm install -g \
 eslint \
 eslint-config-digital-scientists \
 babel-eslint
```

---

## Usage

### For local/project-based setups

Add a `.eslintrc` file to the root folder of your project and make sure it's tracked in source control.

Add the following lines to the `.eslintrc`:

```json
{
  "extends": "digital-scientists",
  "root": true
}
```

### For global/system-wide-default setup

Do the same as above, but just put the `.eslintrc` file in your $HOME directory.

_Note:_

* in the `extends` attribute, the `eslint-config-` portion of the config name is assumed by ESLint.
* the `root` attribute prevents ESLint from merging local rules with any global configs you may have installed.

## Integrating ESLint with Your Editor (real-time linting)

For the best developer experience, it's recommended to install and activate an ESLint extension/plugin for your editor to provide immediate visual feedback about linting issues.

Some recommended ESLint plugins are:

* [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [sublime-linter](https://sublimelinter.readthedocs.io/en/latest/installation.html)
* [linter-eslint for Atom](https://atom.io/packages/linter-eslint)

---

## Integrating ESLint With Prettier

Prettier and ESLint can work together, but need to be configured so they don't conflict with each other.

`eslint-config-digital-scientists` handles this configuration for you, so you don't need to worry about it.

All you need to do is:

* Install `prettier`

```sh
# locally in your project as a devDependency
npm install --save-dev prettier
# or globally, if you're into that kind of thing
npm install -g prettier
```

* Add a `.prettierrc` config file to the root directory of your project (that's how our config can detect that it needs to play nice with Prettier)
* Make sure the `.prettierrc` file contains valid JSON, even if it's just `{}`. Better yet, adopt the settings below:

```json
{
  "arrowParens": "always",
  "bracketSpacing": false,
  "jsxBracketSameLine": false,
  "printWidth": 80,
  "singleQuote": false,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "proseWrap": "always"
}
```

Once you've done that, Prettier and ESLint should be a great team with no conflicts.

## Integrating Prettier with Your Editor (autoformatting)

For an especially frictionless development experience, you should install a Prettier formatting plugin for your editor and set it to format on save.

Here are links for plugin for some of the most popular editors:

* For Visual Studio Code: [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* For Sublime: [JsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)
* For Atom: [prettier-atom](https://github.com/prettier/prettier-atom)
* For everything else, [checkout the docs](https://prettier.io/docs/en/editors.html)

## Known Problems

* **My integrated ESLint plugin says I'm breaking a Prettier rule, when I'm not**
  * This may happen if you edit your `.prettierrc` file _after_ your ESLint plugin loads the `eslint-config-digital-scientists`. If this happens. finish editing the `.prettierrc`, and then restart/refresh your editor so that the ESLint plugin can reload everything.

---

## Extending

This package supports rules from [ESLint](http://eslint.org/docs/rules/),
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native), [eslint-plugin-react-redux](https://www.npmjs.com/package/eslint-plugin-react-redux), and [eslint-plugin-redux-saga](https://www.npmjs.com/package/eslint-plugin-redux-saga).

You can override the rules defined in our config by simply applying rules in your `.eslintrc` file. For example:

```json
{
  "extends": "digital-scientists",
  "rules": {
    "semi": [1, "always"]
  }
}
```

This turns on enforcing the use of semicolons, a rule which is silenced by default in the current version of the `eslint-config-digital-scientists` package.

---

## Background

The [ESLint](http://http://eslint.org/) linting system is a popular one for its support of ES6 syntax, pluggable [rules](http://eslint.org/docs/rules/), automatic rule names in warning messages, and [shareable](http://eslint.org/docs/developer-guide/shareable-configs) / [extendable](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) config files.

Because it defaults to supporting multiple environments (e.g. Node, browsers, Jasmine, Mocha, etc.) it is probably not suitable for general production, where one might want a finer-grained and more restrictive config. However it is easy to override and extend this base config with custom rules, [as explained above and in the ESLint docs](http://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).

---

## License

MIT
