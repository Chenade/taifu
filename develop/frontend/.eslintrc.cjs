/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-strongly-recommended', 'eslint:recommended', 'prettier'],
  plugins: ['vue'],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-undef': 'off',
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'vue/no-template-shadow': 'off',
    'no-prototype-builtins': 'off',
  },
};
