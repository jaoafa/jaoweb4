// Stylelint Configuration
// https://stylelint.io/user-guide/configure

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['apply'] }],
  },
}
