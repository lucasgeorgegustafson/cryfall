module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
