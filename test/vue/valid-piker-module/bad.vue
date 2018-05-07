<!-- bad 语法错误的 valid-picker-module -->
<!-- 当 pick 方法调用时无回调函数会引起 APP Crash -->
<script>
const picker = weex.requireModule('picker');
export default {
    methods: {
        open: function() {
            picker.pick({index: this.index, items})
        }
    }
}
</script>