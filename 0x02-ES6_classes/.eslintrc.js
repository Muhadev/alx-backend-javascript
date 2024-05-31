module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
      {
        files: ["*.js"],
        excludedFiles: "babel.config.js",
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      "max-classes-per-file": "off",
      "no-underscore-dangle": "off",
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
  };
  