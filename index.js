'use strict';

module.exports = {
  extends: [
    'digital-scientists-base',
    'digital-scientists-react',
    'digital-scientists-react-native',
  ],

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
  },

  globals: {
    angular: true,
  },
};
