module.exports = [
  {
    env: {
      es6: true,
      node: true,
      jest: true,
      extends: { eslint: recommended },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: module,
      },
      rules: { 'no-use-before-define': error, 'prefer-const': error },
    },
  },
];
