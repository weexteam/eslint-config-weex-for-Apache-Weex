<!-- bad 语法错误的 no-global -->
<template>
    <div>
        
    </div>
</template>
<<script>
    export default {
    name: 'App',
    methods: {
        test: function() {
            global.test();
        }
    }
};
</script>