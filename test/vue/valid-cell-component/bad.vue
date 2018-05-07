<!-- bad 语法错误的 valid-cell-component -->
<!-- cell 组件不支持 margin-top/bottom 配置 -->
<template>
    <list>
        <cell class="cell"></cell>
    </list>
</template>
<style>
.cell {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>