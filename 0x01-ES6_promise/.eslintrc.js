module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 0 }],
      'eol-last': ['error', 'always'],
    },
  };
  