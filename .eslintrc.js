module.exports = {
  env: {
        browser: true,
        es6: true,
        jest: true,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
      },
      plugins: [
        'react',
        'prettier',
      ],
      rules: {
        semi: 0,
        'no-unused-vars': 'warn',
        'function-name': 0,
        'indent': 0,
        'react/jsx-indent': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-indent-props': 0,
      },
};
