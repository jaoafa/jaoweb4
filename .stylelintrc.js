// Stylelint Configuration
// https://stylelint.io/user-guide/configure

/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply'] }],
  },
}
