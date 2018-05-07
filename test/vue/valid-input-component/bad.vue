<!-- bad 语法错误的 valid-input-component -->
<!-- 不支持 click 事件-->
<template>
      <input @click="click" />
</template>
<!-- 仅支持 text|date|datetime|email|password|tel|time|url|number 的type类型 -->
<template>
    <input type="address" />
</template>