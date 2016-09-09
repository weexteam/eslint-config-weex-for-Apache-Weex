module.exports = {
  env: {
    es6: false,
    node: true,
    mocha: true,
  },

  globals: {
    document: false,
    navigator: false,
    window: false,
    global: false,
    location: false,
    callNative: false,
    callJS: false,
  },

  extends: [
    './rules/weex',
    './rules/limit',
    './rules/advice',
  ].map(require.resolve),

  rules: {}
}
