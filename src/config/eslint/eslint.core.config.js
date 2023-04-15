const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  extends: [
    './extends/eslint.node.config',
    './extends/eslint.module.config',
    './extends/eslint.babel.config',
    './extends/eslint.es.config',
    './extends/eslint.react.config'
  ],
  settings: {
    react: {
      version: '18.0.2'
    }
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default-member': 'off'
  }
};
