'use strict';

module.exports = {

  extends: [
    './rules/base',
    require('eslint-plugin-react') && './rules/react',
    require('eslint-plugin-react-native') && './rules/react-native',
  ].map(require.resolve),

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
