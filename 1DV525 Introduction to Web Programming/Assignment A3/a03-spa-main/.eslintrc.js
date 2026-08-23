module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: [
    'jsdoc'
  ],
  extends: [
    'standard',
    'plugin:jsdoc/recommended',
    'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 4],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': ['warn']
  },
  ignorePatterns: [
    'build/',
    'doc/',
    'dist/',
    'node_modules/'
  ]
}
