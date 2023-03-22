module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:@next/next/recommended',
    'standard-with-typescript',
    'next'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
}
