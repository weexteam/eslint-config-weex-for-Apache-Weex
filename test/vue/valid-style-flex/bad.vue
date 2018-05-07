<!-- bad 语法错误的 valid-style-flex -->
<template>
    <div class="wrapper"></div>
</template>
<style>
.wrapper {
    /* flex 属性仅支持 flex: Number 不支持属性的拆分 */
    flex: 1 1 auto;
    /* align-items 属性不支持 baseline */
    align-items: baseline;
    /* align-self 属性不支持 baseline */
    align-self: baseline;
    /* 不支持 flex-grow 属性 */
    flex-grow: 1;
    /* 不支持 flex-shrink 属性 */
    flex-shrink: 1;
    /* 不支持 flex-basis 属性 */
    flex-basis: baseline;
    /* 不支持 order 属性 */
    order: 10;
}
</style>