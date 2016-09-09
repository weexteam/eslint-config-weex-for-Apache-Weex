module.exports = {
  plugins: ['weex-bundle'],
  rules: {

    // 不准引入内置 timer 模块
    'weex-bundle/no-timer-module': 2,

  }
}
