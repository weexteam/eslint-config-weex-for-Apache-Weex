module.exports = {
  rules: {

    // 禁用 console （console.warn console.error 可用）
    // 'no-console': ['warn', { allow: ['warn', 'error'] }],

    // 不能有空的大括号
    // 'no-empty': ['warn', { 'allowEmptyCatch': true }],

    // 不存在没有用到的变量
    'no-unused-vars': ['warn', {
      'vars': 'local',
      'caughtErrors': 'none',
      'args': 'none'
    }],

    // 数组中不能有额外的逗号（结尾可以有逗号）
    'no-sparse-arrays': 'error',

    // 在普通字符串中不能用模板字符串的语法
    'no-template-curly-in-string': 'warn',

    // 不能有执行不到的代码
    // 'no-unreachable': 'warn',

    // 存在 if(true) 或者 if(false)
    'no-constant-condition': 'warn',

    // 不可以有重复的值
    // 'no-dupe-args': 'warn',
    // 'no-dupe-keys': 'warn',
    // 'no-ex-assign': 'error',
    // 'no-func-assign': 'error',

    // 不可以有相同的 case 语句
    'no-duplicate-case': 'warn',

    // 禁止自己和自己比较或赋值
    // 'no-self-compare': 'warn',
    // 'no-self-assign': 'warn',

    // 不能有额外的 fn.bind
    // 'no-extra-bind': 'warn',

    // 不能有无用的 fn.call 和 fn.apply
    // 'no-useless-call': 'warn',

    // map reduce find every some filter sort 中的回调函数必须有返回值
    // 'array-callback-return': 'warn',

  }
}
