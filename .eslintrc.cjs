module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'react/button-has-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prefer-const': 'warn',
    eqeqeq: 'warn',
    'prefer-arrow-callback': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ignoreTypeReferences: true,
      },
    ],
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unescaped-entities': 'off',
    'no-else-return': 'off',
    'consistent-return': 'off',
  },
}
