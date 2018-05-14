<!-- bad 语法错误的 valid-animation-module -->
<!-- 当 animation 中的style属性不合法时会引起 APP Crash -->
<script>
const animation = weex.requireModule('animation');
export default {
    methods: {
        open: function() {
            animation.transition(this.$refs.block1, {
              styles: {
                height: 'px', // 不合法
                width : 'px', // 不合法
                backgroundColor : self.bgc
              },
              timingFunction:  'ease',
              duration: 300,
              needLayout:false
            }, function() {
            });
        }
    }
}
</script>