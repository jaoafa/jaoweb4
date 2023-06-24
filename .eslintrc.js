// ESLint Configuration
// https://eslint.org/docs/latest/use/configure

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['standard', '@nuxt/eslint-config', 'prettier'],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
