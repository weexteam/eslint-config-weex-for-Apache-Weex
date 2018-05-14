<!-- good 语法正确的 valid-animation-module -->
<script>
const animation = weex.requireModule('animation');
export default {
    methods: {
        open: function() {
            animation.transition(
                this.$refs.block1,
                {
                    styles: {
                        height: '1px',
                        width: '1px',
                        backgroundColor: self.bgc
                    },
                    timingFunction: 'ease',
                    duration: 300,
                    needLayout: false
                },
                function() {}
            );
        }
    }
};
</script>
