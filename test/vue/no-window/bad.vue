<!-- bad 语法错误的 no-window -->
<template>
    <div>
        
    </div>
</template>
<<script>
    export default {
    name: 'App',
    methods: {
        test: function() {
            window.open('blank');
        }
    }
};
</script>