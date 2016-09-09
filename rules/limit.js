module.exports = {
  rules: {

    // =========================================================
    //  禁用危险语法
    // =========================================================

    // 禁用 alert / debugger / caller / callee
    "no-alert": "error",
    "no-debugger": "error",
    "no-caller": "error",

    // 禁用 void / with / label
    "no-void": "warn",
    "no-with": "warn",
    "no-labels": "error",

    // 禁止使用 new Function 或者 eval
    "no-new-func": "warn",
    "no-implied-eval": "warn",

    // 禁用多行字符串
    "no-multi-str": "error",

    // 使用严格比较
    eqeqeq: "warn",


    // =========================================================
    //  禁用全局变量
    // =========================================================

    // 禁止覆盖全局变量
    "no-global-assign": ["error"],

    // 不可隐式创建全局变量
    "no-implicit-globals": "error",

    // 禁用 window 和 global 变量
    "no-restricted-globals": ["error", "window", "global"],


    // =========================================================
    //  禁止修改原生对象
    // =========================================================

    // 禁止扩展原生对象
    "no-extend-native": ["error"],

    // 不能通过实例调用 Object.prototype 中的方法
    "no-prototype-builtins": "error",

    // 禁用 __iterator__ 和 __proto__ 属性
    "no-iterator": "error",
    "no-proto": "error",

    // 禁止使用 new 创建内置对象
    "no-new-wrappers": "warn",

    // 不能直接调用 Math() JSON()
    "no-obj-calls": "error",

    // 必须使用 isNaN 判断 NaN
    "use-isnan": "error",


    // =========================================================
    //  限制变量名和作用域
    // =========================================================

    // 不能与父作用域中的变量重名
    "no-shadow": ["error", {
      "builtinGlobals": false,
      "allow": ["module", "exports"]
    }],

    // 禁止使用变量提升的特性
    "no-use-before-define": "error",
    "block-scoped-var": "error",

    // 禁止变量重复声明
    "no-redeclare": ["error", { "builtinGlobals": true }],

    // 禁止使用限制的（保留字）变量名
    "no-shadow-restricted-names": "error",

    // 禁止在 if 和 for 语句中创建函数
    "no-inner-declarations": "error",
    "no-loop-func": "error",

    // 限制不稳定的否定判断，优先级模糊
    "no-unsafe-negation": "error",

    // 不能在 return 和 if 的判断语句中赋值
    "no-return-assign": "error",
    "no-cond-assign": "error",

  }
}
