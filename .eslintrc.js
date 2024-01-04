module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended', // 针对nuxt3的校验规则
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: 'off',
    'vue/no-unused-components': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'no-const-assign': 2,
    '@typescript-eslint/no-var-requires': ['error'],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'no-spaced-func': 2,
    'no-whitespace-before-property': 2,
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 0
  }
}
