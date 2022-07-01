/* 依赖版本：
 *   eslint ^7.0.0
 *   babel-eslint ^10.1.0
 *   eslint-plugin-react ^7.21.5
 *   @typescript-eslint/parser ^4.11.0
 *   @typescript-eslint/eslint-plugin ^4.11.0
 */
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        // tsconfigRootDir: 'src',
        tsconfigRootDir: './',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        'include': [
          // repeated from base config's "include" setting
          'src',
          'tests',

          // these are the eslint-only inclusions
          '.eslintrc.js',
        ],
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'off', { 'accessibility': 'explicit' },
        ],
        'func-call-spacing': 'off',
        'prefer-const': 'warn',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': ['warn', {
          ignore: [-1, 0, 1],
          ignoreArrayIndexes: true,
          detectObjects: false,
          enforceConst: true,
          'ignoreEnums': true,
          'ignoreReadonlyClassProperties': true,
          'ignoreNumericLiteralTypes': true,
        }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/no-this-alias': ['off',
          {
            'allowDestructuring': true, // Allow `const { props, state } = this`; false by default
            'allowedNames': ['vm', 'that'], // Allow `const vm= this`; `[]` by default
          }],
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': [
        //   'error',
        //   { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        // ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        semi: 'off',
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'warn',
        // TS自带这功能
        'no-undef': 'off',
        // 和TS的规则冲突
        'require-await': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
