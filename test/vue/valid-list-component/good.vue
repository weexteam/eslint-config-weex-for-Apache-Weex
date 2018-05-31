<!-- good 语法正确的 valid-scroller-component -->
<!-- 不要在 <scroller> 中嵌套 <list> 详细例子可见: http://dotwe.org/vue/d31c85e7cd2dc54fa098e920a5376c38 -->
<template>
  <div>
    <list class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="(num, index) in lists" :key="index">
        <div class="panel">
          <text class="text">{{num}}</text>
        </div>
      </cell>
    </list>
  </div>
</template>
