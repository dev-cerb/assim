module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methos-use-this': off,
    'import/first': 'off',
    'import/no-extraneous-dependencies': ['error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      }],
  },
};
