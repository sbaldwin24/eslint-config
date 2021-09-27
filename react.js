const { ignore, warn } = require('./consts');

module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/accessible-emoji': ignore,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react/display-name': warn,
    'react/forbid-prop-types': ignore,
    'jsx-a11y/href-no-hash': 'off',
    'react/jsx-boolean-value': ignore,
    'react/jsx-curly-newline': [
      'off',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-filename-extension': [
      warn,
      {
        extensions: ['.js', '.jsx', '.md'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'off',
      {
        html: 'ignore',
        custom: 'ignore',
        exceptions: [],
      },
    ],
    'react/no-array-index-key': warn,
    'react/no-unescaped-entities': ignore,
    'react/prefer-stateless-function': ignore,
    'react/react-in-jsx-scope': ignore,
    'react/sort-comp': ignore,
  },
};
