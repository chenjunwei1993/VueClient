/*
 * @Descripttion:
 * @Author: caihaipeng
 * @Date: 2020-06-15 09:52:54
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-06-28 15:34:44
 */

// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html', 'vue'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 括号函数括号前不加一个空格
    'space-before-function-paren': 0
  }
}
