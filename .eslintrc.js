module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
