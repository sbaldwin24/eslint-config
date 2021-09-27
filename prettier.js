module.exports = {
  extends: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'strict',
        insertPragma: false,
        printWidth: 100,
        requirePragma: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
  plugins: ['prettier'],
};
