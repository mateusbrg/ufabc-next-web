module.exports = {
  extends: ['turbo', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    es6: true,
  },
  rules: {},
};
