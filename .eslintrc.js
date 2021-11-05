module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'typescript-eslint/consistent-type-definitions': 'off',
    'typescript-eslint/strict-boolean-expressions': 'off'
  }
}
