// Stylelint Configuration
// https://stylelint.io/user-guide/configure

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['tailwind.scss'],
      rules: {
        'scss/at-rule-no-unknown': [
          true,
          { ignoreAtRules: ['tailwind', 'layer', 'apply'] },
        ],
      },
    },
  ],
  rules: {},
}
