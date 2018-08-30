/**
 * WeexTeam ESLint 规则 - Vue
 *
 * 包含所有 ESLint 规则，以及所有 eslint-plugin-vue 规则
 * 使用 vue-eslint-parser 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    extends: [
        './base.js'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 设置 js 的解析器为 babel-eslint
        // https://github.com/mysticatea/vue-eslint-parser#-options
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
            experimentalObjectRestSpread: true,
            jsx: false,
            modules: true
        }
    },
    plugins: [
        'weex'
    ],
    globals: {
        weex: false
    },
    rules: {
        //
        // weex 相关
        //
        // 禁止使用 v-cloak 指令
        'weex/vue/no-v-cloak': 'error',
        // 禁止使用 v-html 指令
        'weex/vue/no-v-html': 'error',
        // 禁止使用 document API
        'weex/vue/no-document': 'error',
        // 禁止使用 global API
        'weex/vue/no-global': 'error',
        // 禁止使用 window API
        'weex/vue/no-window': 'error',
        // 禁止使用 display 样式, Native 端存在兼容问题
        'weex/vue/no-style-display': 'warn',
        // 禁止使用 float 样式, Native 端存在兼容问题
        'weex/vue/no-style-float': 'warn',
        // 禁止使用 z-index 样式, Native 端存在兼容问题
        'weex/vue/no-style-z-index': 'warn',
        // 禁止使用 v-show 指令
        'weex/vue/no-v-show': 'error',
        // cell 组件必须合法
        'weex/vue/valid-cell-component': 'error',
        // image 组件必须合法
        'weex/vue/valid-image-component': 'error',
        // indicator 组件必须合法
        'weex/vue/valid-indicator-component': 'error',
        // input 组件必须合法
        'weex/vue/valid-input-component': 'error',
        // list 组件必须合法
        'weex/vue/valid-list-component': 'error',
        // scroller 组件必须合法
        'weex/vue/valid-scroller-component': 'error',
        // web 组件必须合法
        'weex/vue/valid-web-component': 'error',
        // video 组件必须合法
        'weex/vue/valid-video-component': 'error',
        // switch 组件必须合法
        'weex/vue/valid-switch-component': 'error',
        // picker 模块必须合法
        'weex/vue/valid-picker-module': 'error',
        // animation 模块必须合法
        'weex/vue/valid-animation-module': 'error',
        // flex 样式必须合法, Native 端存在兼容问题
        'weex/vue/valid-style-flex': 'warn',
        // 选择器 格式必须合法
        'weex/vue/valid-style-selector': 'error',
        // font-family 样式必须合法, Native 端存在兼容问题
        'weex/vue/valid-style-font-family': 'warn',
        // style 格式必须合法, 前端存在表现不一致问题
        'weex/vue/valid-style-root': 'warn',
        //
        // vue 相关
        //
        // 禁止重复的二级键名
        // @off 没必要限制
        'weex/vue/no-dupe-keys': 'off',
        // 禁止出现语法错误
        'weex/vue/no-parsing-error': [2, {
            'x-invalid-end-tag': false,
            'missing-whitespace-between-attributes': false
        }],
        // 禁止覆盖保留字
        'weex/vue/no-reserved-keys': 'error',
        // 组件的 data 属性的值必须是一个函数
        // @off 没必要限制
        'weex/vue/no-shared-component-data': 'off',
        // 禁止 <template> 使用 key 属性
        // @off 过于严格
        'weex/vue/no-template-key': 'off',
        // render 函数必须有返回值
        'weex/vue/require-render-return': 'error',
        // prop 的默认值必须匹配它的类型
        // @off 过于严格
        'weex/vue/require-valid-default-prop': 'off',
        // 计算属性必须有返回值
        'weex/vue/return-in-computed-property': 'error',
        // template 的根节点必须合法
        'weex/vue/valid-template-root': 'error',
        // v-bind 指令必须合法
        'weex/vue/valid-v-bind': 'error',
        // v-else-if 指令必须合法
        'weex/vue/valid-v-else-if': 'error',
        // v-else 指令必须合法
        'weex/vue/valid-v-else': 'error',
        // v-for 指令必须合法
        'weex/vue/valid-v-for': 'warn',
        // v-if 指令必须合法
        'weex/vue/valid-v-if': 'error',
        // v-model 指令必须合法
        'weex/vue/valid-v-model': 'error',
        // v-on 指令必须合法
        'weex/vue/valid-v-on': 'error',
        // v-once 指令必须合法
        'weex/vue/valid-v-once': 'error',
        // v-pre 指令必须合法
        'weex/vue/valid-v-pre': 'error',
        // v-text 指令必须合法
        'weex/vue/valid-v-text': 'error',
        //
        // 最佳实践
        //
        // @fixable html 的结束标签必须符合规定
        // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
        'weex/vue/html-end-tags': 'off',
        // 计算属性禁止包含异步方法
        'weex/vue/no-async-in-computed-properties': 'error',
        // 禁止出现难以理解的 v-if 和 v-for
        'weex/vue/no-confusing-v-for-v-if': 'warn',
        // 禁止出现重复的属性
        'weex/vue/no-duplicate-attributes': 'error',
        // 禁止在计算属性中对属性修改
        // @off 过于严格
        'weex/vue/no-side-effects-in-computed-properties': 'off',
        // 禁止在 textarea 中出现 {{message}}
        'weex/vue/no-textarea-mustache': 'error',
        // 组件的属性必须为一定的顺序
        'weex/vue/order-in-components': 'error',
        // <component> 必须有 v-bind:is
        'weex/vue/require-component-is': 'error',
        // prop 必须有类型限制
        // @off 没必要限制
        'weex/vue/require-prop-types': 'off',
        // v-for 指令的元素必须有 v-bind:key
        'weex/vue/require-v-for-key': 'warn',
        //
        // 风格问题
        //
        // @fixable 限制自定义组件的属性风格
        // @off 没必要限制
        'weex/vue/attribute-hyphenation': 'off',
        // html 属性值用双引号括起来, 关闭
        'weex/vue/html-quotes': 'off',
        // @fixable 没有内容时，组件必须自闭和
        // @off 没必要限制
        'weex/vue/html-self-closing': 'off',
        // 限制每行允许的最多属性数量
        // @off 没必要限制
        'weex/vue/max-attributes-per-line': 'off',
        // @fixable 限制组件的 name 属性的值的风格
        // @off 没必要限制
        'weex/vue/name-property-casing': 'off',
        // @fixable 禁止出现连续空格
        'weex/vue/no-multi-spaces': 'error',
        // @fixable 限制 v-bind 的风格
        // @off 没必要限制
        'weex/vue/v-bind-style': 'off',
        // @fixable 限制 v-on 的风格
        // @off 没必要限制
        'weex/vue/v-on-style': 'off',
        //
        // 变量
        //
        // 定义了的 jsx element 必须使用
        'weex/vue/jsx-uses-vars': 'error'
    }
};
