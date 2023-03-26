'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    /**
     * Possible Problems
     */
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': 'error',
    'no-useless-backreference': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /**
     * Suggestions
     */
    'no-case-declarations': 'error',
    'no-delete-var': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-global-assign': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-shadow-restricted-names': 'error',
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    'require-yield': 'error',

    /**
     * Layout & Formatting
     */
    'no-mixed-spaces-and-tabs': 'error',
  },
};
