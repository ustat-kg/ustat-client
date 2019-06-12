// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    "prettier"
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    // 'semi':"semi-style" ["error", "last"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off'
  }
}
