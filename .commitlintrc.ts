// commitlint configuration
// https://commitlint.js.org/#/reference-configuration
import type { UserConfig } from '@commitlint/types'
const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
}
module.exports = Configuration
