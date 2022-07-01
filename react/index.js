module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': ['off', 'never'],
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-curly-spacing': ['warn', 'never'],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    // 'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // 'react/jsx-handler-names': 'off',
    // 'react/jsx-indent-props': ['error', base_indent],
    // 'react/jsx-indent': ['error', base_indent],
    'react/jsx-key': 'warn',
    // 'react/jsx-max-props-per-line': [
    //   'error',
    //   {
    //     when: 'multiline',
    //   },
    // ],
    // 'react/jsx-no-bind': [
    //   'warn',
    //   {
    //     ignoreRefs: true,
    //     allowArrowFunctions: false,
    //     allowBind: false,
    //   },
    // ],
    // 'react/jsx-no-comment-textnodes': 'warn',
    // 'react/jsx-no-duplicate-props': [
    //   'error',
    //   {
    //     ignoreCase: true,
    //   },
    // ],
    // 'react/jsx-no-literals': 'off',
    // Prevent usage of unsafe target='_blank' (react/jsx-no-target-blank)，当我们希望使用target=_blank来打开一个新标签页时，一定要加上rel='noreferrer noopener'，否则你的网页就会存在很严重的安全问题！！！
    'react/jsx-no-target-blank': 'warn',
    // 'react/jsx-no-undef': 'error',
    // 'react/jsx-pascal-case': [
    //   'error',
    //   {
    //     allowAllCaps: true,
    //   },
    // ],
    // 'react/jsx-sort-props': 'off',
    // 'react/jsx-tag-spacing': [
    //   'error',
    //   {
    //     closingSlash: 'never',
    //     beforeSelfClosing: 'always',
    //     afterOpening: 'never',
    //   },
    // ],
    // 'react/jsx-uses-react': 'off',
    // 'react/jsx-uses-vars': 'error',
    // 'react/jsx-wrap-multilines': [
    //   'error',
    //   {
    //     declaration: true,
    //     assignment: true,
    //     return: true,
    //     arrow: true,
    //   },
    // ],
    // 'react/no-array-index-key': 'error',
    // 'react/no-children-prop': 'error',
    // 'react/no-danger-with-children': 'error',
    // 'react/no-danger': 'warn',
    'react/no-deprecated': 'warn',
    // 'react/no-did-mount-set-state': 'off',
    // 'react/no-did-update-set-state': 'off',
    // 'react/no-will-update-set-state': 'error',
    // 'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    // 'react/no-is-mounted': 'error',
    // 'react/no-multi-comp': [
    //   'error',
    //   {
    //     ignoreStateless: true,
    //   },
    // ],
    // 'react/no-render-return-value': 'error',
    // 'react/no-set-state': 'off',
    'react/no-string-refs': 'off',
    'react/no-unescaped-entities': 'warn',
    // 'react/no-unknown-property': 'error',
    // 'react/no-unused-prop-types': 'off',
    // 'react/prefer-es6-class': ['error', 'always'],
    // 'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/require-default-props': 'off',
    // 'react/require-optimization': 'off',
    // 'react/require-render-return': 'error',
    // 'react/self-closing-comp': [
    //   'error',
    //   {
    //     component: true,
    //     html: false,
    //   },
    // ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/sort-comp': [
      'off',
      {
        order: [
          'static-properties',
          'static-methods',
          'state',
          'properties',
          'lifecycle',
          'everything-else',
          'render',
        ],
        groups: {
          'static-properties': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
          ],
          lifecycle: [
            'getDefaultProps',
            'getInitialState',
            'constructor',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
  },
};
