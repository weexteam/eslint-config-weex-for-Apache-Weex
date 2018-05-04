/**
 * AlloyTeam ESLint 规则 - Vue
 *
 * 包含所有 ESLint 规则，以及所有 eslint-plugin-vue 规则
 * 使用 vue-eslint-parser 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    extends: [
        './index.js'
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
    rules: {
        //
        // weex 相关
        //
        // 不支持 v-cloak 指令
        'weex/vue/no-v-cloak': 'error',
        // 不支持 v-html 指令
        'weex/vue/no-v-html': 'error',
        // 不支持 document API
        'weex/vue/no-document': 'error',
        // 不支持 global API
        'weex/vue/no-global': 'error',
        // 不支持 window API
        'weex/vue/no-window': 'error',
        // 不支持 display 样式
        'weex/vue/no-style-display': 'error',
        // 不支持 float 样式
        'weex/vue/no-style-float': 'error',
        // 不支持 z-index 样式
        'weex/vue/no-style-z-index': 'error',
        // 不支持 v-show 指令
        'weex/vue/no-v-show': 'error',
        // 校验 cell 组件
        'weex/vue/valid-cell-component': 'error',
        // 校验 image 组件
        'weex/vue/valid-image-component': 'error',
        // 校验 indicator 组件
        'weex/vue/valid-indicator-component': 'error',
        // 校验 input 组件
        'weex/vue/valid-input-component': 'error',
        // 校验 list 组件
        'weex/vue/valid-list-component': 'error',
        // 校验 scroller 组件
        'weex/vue/valid-scroller-component': 'error',
        // 校验 web 组件
        'weex/vue/valid-web-component': 'error',
        // 校验 video 组件
        'weex/vue/valid-video-component': 'error',
        // 校验 switch 组件
        'weex/vue/valid-switch-component': 'error',
        // 校验 picker 模块
        'weex/vue/valid-picker-module': 'error',
        // 校验 flex 样式
        'weex/vue/valid-style-flex': 'error',
        // 校验 选择器 格式
        'weex/vue/valid-style-selector': 'error',
        // 校验 font-family 样式
        'weex/vue/valid-style-font-family': 'error',
        //
        // vue 相关
        //
        // 禁止重复的二级键名
        // @off 没必要限制
        'weex/vue/no-dupe-keys': 'off',
        // 禁止出现语法错误
        'weex/vue/no-parsing-error': 'error',
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
        'weex/vue/valid-v-for': 'error',
        // 不支持 v-html 指令
        'weex/vue/valid-v-html': 'error',
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
        'weex/vue/no-confusing-v-for-v-if': 'error',
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
        'weex/vue/require-v-for-key': 'error',
        //
        // 风格问题
        //
        // @fixable 限制自定义组件的属性风格
        // @off 没必要限制
        'weex/vue/attribute-hyphenation': 'off',
        // html 属性值必须用双引号括起来
        'weex/vue/html-quotes': 'error',
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
