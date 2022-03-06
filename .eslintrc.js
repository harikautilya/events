module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {

  },
  settings: {
    'import/resolver': {
      typescript: {
        "alwaysTryTypes": true,
      },
    },
  }
};
