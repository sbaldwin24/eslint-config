# freedomfirst-eslint-config

## Installation

`npm install --save-dev @sbaldwin24/eslint-config `

## Usage

Create a `.eslintrc.js` file in your project's root and paste:

```js
module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    '@sbaldwin24/eslint-config',
    '@sbaldwin24/eslint-config/node',
    '@sbaldwin24/eslint-config/prettier',
    '@sbaldwin24/eslint-config/react',
  ],
};
```

### VSCode Config

1. Install [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install `npm install -g npm@latest eslint`
3. Copy and paste the following to VSCode's settings:

```js
// Add format on save
"editor.formatOnSave": true,
// Turn off format on save for JS and JSX, we want eslint to format on save
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// ESLint plugin will run when you save
"eslint.autoFixOnSave": true,
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```
