module.exports = {
  extends: [
    'stylelint-config-recommended'
  ],
  rules: {
    'indentation': 4,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'number-leading-zero': 'always',
    'function-url-quotes': 'always'
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.json',
    '**/*.min.css',
    'build/**/*.css',
    'dist/**/*.css',
    'doc/**/*.css',
    'node_modules/**/*.css'
  ]
}
