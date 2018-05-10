<!-- good 语法正确的 no-global -->
<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        test: function() {
            console.log('Do not use global API.');
        }
    }
};
</script>