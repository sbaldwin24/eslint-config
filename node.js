const { error, ignore } = require('./consts');

module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  rules: {
    /** CommonJS and Node.js */
    'callback-return': ignore,
    'global-require': ignore,
    'handle-callback-err': error,
    /** Possible errors */
    'no-console': ignore,
    'no-mixed-requires': error,
    'no-new-require': error,
    'no-path-concat': error,
    'no-process-exit': error,
    'no-restricted-modules': ignore,
    'no-sync': ignore,
  },
};
