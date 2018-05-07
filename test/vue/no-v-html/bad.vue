<!-- bad 语法错误的 no-v-html -->
<template>
    <div>
        <text v-html="'<div></div>'"></text>
    </div>
</template>