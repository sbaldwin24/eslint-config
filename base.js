const { error, ignore, warn } = require('./consts');

module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  rules: {
    'arrow-body-style': [error, 'as-needed'],
    'comma-dangle': [warn, 'always-multiline'],
    'consistent-return': ignore,
    'func-names': ignore,
    import: ignore,
    'import/extensions': ignore,
    'import/prefer-default-export': ignore,
    'no-alert': ignore,
    'no-console': warn,
    'no-console': ignore,
    'no-debugger': error,
    'no-param-reassign': [
      error,
      {
        props: false,
      },
    ],
    'no-plusplus': [
      warn,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-shadow': [
      error,
      {
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        'max-len': ignore,
        hoist: 'all',
      },
    ],
    'no-underscore-dangle': ignore,
    'no-unused-expressions': [
      error,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      warn,
      {
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    radix: ignore,
    'space-before-function-paren': ignore,
    quotes: [
      error,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
