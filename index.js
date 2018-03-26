'use strict';
var chalk = require('chalk')

var configs = [require.resolve('./rules/base')];
var reactPluginPath;
var reactNativePluginPath;

try {
  reactPluginPath = require.resolve('eslint-plugin-react');
  configs.push(require.resolve('./rules/react'));
}
catch (err) {
  console.warn(chalk.yellow('eslint-plugin-react not found; skipping React rules'))
}

try {
  reactNativePluginPath = require.resolve('eslint-plugin-react-native');
  configs.push(require.resolve('./rules/react-native'));
}
catch (err) {
  console.warn(chalk.yellow('eslint-plugin-react-native not found; skipping React Native rules'))
}

module.exports = {

  extends: configs,

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    jest: true
  },

  parserOptions: {
    ecmaVersion: 2018
  },

  globals: {
    angular: true
  },

};
