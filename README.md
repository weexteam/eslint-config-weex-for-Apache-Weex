# Weex ESLint Rules

 [![npm package](https://img.shields.io/npm/v/eslint-config-weex.svg)](https://www.npmjs.org/package/eslint-config-weex) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-weex.svg)](https://www.npmjs.org/package/eslint-config-weex)
 [![CircleCI](https://circleci.com/gh/weexteam/eslint-config-weex.svg?style=svg)](https://circleci.com/gh/weexteam/eslint-config-weex)

Rules Detail：https://weexteam.github.io/eslint-config-weex/

Name | Rules | Parser
--- | --- | ---
[JS](#Standard) | [JS Rules][] | [babel-eslint][]
[Vue](#vue) | [JS Rules][]、[Weex/vue Rules][] | [eslint-plugin-weex][] [babel-eslint][]


[babel-eslint]: https://github.com/babel/babel-eslint
[vue-eslint-parser]: https://github.com/mysticatea/vue-eslint-parser
[JS Rules]: https://eslint.org/docs/rules/
[weex/vue Rules]: https://www.npmjs.com/package/eslint-plugin-weex#bulb-rules
[eslint-plugin-weex]: https://www.npmjs.com/package/eslint-plugin-weex

## 配置原则

我们依据以下三条原则，研读了 ESLint 所有的配置项，定制出适合 Weex 开发的 ESLint 配置。

1. 能够帮助发现代码错误的规则，全部开启
2. 配置不应该依赖于某个具体项目，而应尽可能的合理
3. 帮助保持团队的代码风格统一，而不是限制开发体验

## 配置解读

我们对每一条配置，都有详尽的注释，这样不仅方便了我们自己查阅某项配置的意义和原因，也使大家更容易配置出自己心目中的规则：

- 每一条配置都有注释说明此配置的用途
- 对于理解困难的配置，都在注释中有举例
- 对于有争议的配置，都在注释中说明了为什么要这么配置的原因
- 对于关闭掉的配置，都在注释中有对应的原因说明，以及 `@off` 的标识
- 对于能够 autofix 的配置，都在注释中有标注 `@autofix`

## Usage

### Standard

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-config-weex
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-weex',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```

### Vue

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-weex eslint-config-weex
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-weex/vue',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // Vue: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```

## Testing

```bash
npm test
```

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
