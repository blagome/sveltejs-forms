module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/ignore-styles': attributes =>
      attributes.lang && attributes.lang.includes('scss'),
  },
  rules: {
    'jest/no-test-callback': 0
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3', 'jest'],
};
