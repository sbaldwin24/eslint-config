module.exports = {
  plugins: ['markdown'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
