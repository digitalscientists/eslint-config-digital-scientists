'use strict';

module.exports = {

  extends: [
    './rules/base',
    './rules/react',
    './rules/react-native',
  ].map(require.resolve),

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    jquery: true,
    jest: true
  },

  parserOptions: {
    ecmaVersion: 2018
  },

  globals: {
    angular: true
  },

};
