<!-- bad 语法错误的 no-document -->
<template>
    <div>
        
    </div>
</template>
<<script>
    export default {
    name: 'App',
    methods: {
        test: function() {
            document.getElementById('#test');
        }
    }
};
</script>