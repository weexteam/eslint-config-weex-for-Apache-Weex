<!-- good 语法正确的 valid-scroller-component -->
<!-- 不要在 <scroller> 中嵌套 <list> 详细例子可见: http://dotwe.org/vue/02eab70743995fdf6bbb44dfa7adc595 -->
<template>
  <div>
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
        <text class="text" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
  </div>
</template>
