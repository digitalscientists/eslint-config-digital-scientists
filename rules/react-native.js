'use strict';

// Specifies additional options to use in React-Native projects.
// Note that you need to manually install `eslint-plugin-react-native` as a peer
// dependency (see https://goo.gl/I4AYlb for more details).

module.exports = {
  "env": {
    "react-native/react-native": true
  },

  "extends": [
    "plugin:react-native/all"
  ],

  "plugins": [
   "react-native"
  ],

  "parserOptions": {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  "rules": {
    "no-unused-styles": 1,
    "split-platform-components": 1,
    "no-inline-styles": 0,
    "no-color-literals": 1
  }
}
