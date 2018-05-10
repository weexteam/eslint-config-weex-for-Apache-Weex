<!-- good 语法正确的 valid-picker-module -->
<script>
const picker = weex.requireModule('picker');
export default {
    methods: {
        open: function() {
            picker.pick({ index: 0, items: [0, 1] }, function() {});
        }
    }
};
</script>
