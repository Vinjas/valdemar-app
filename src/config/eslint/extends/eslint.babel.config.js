const path = require('path');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      legacyDecorators: false
    },
    babelOptions: {
      configFile: path.resolve(__dirname, '../../babel/common.babel.config.js')
    }
  }
};
