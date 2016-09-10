module.exports = {
  env: {
    es6: false,
    node: true,
    mocha: true,
  },

  globals: {
    document: false,
    navigator: false,
    location: false,
  },

  extends: [
    './rules/weex',
    './rules/limit',
    './rules/advice',
  ].map(require.resolve),

  rules: {}
}
