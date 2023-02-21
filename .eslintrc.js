// ESLint Configuration
// https://eslint.org/docs/latest/use/configure

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
