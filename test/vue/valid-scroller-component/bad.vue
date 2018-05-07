<!-- bad 语法错误的 valid-scroller-component -->
<!-- 不要在 <scroller> 中嵌套 <list> -->
<template>
    <scroller class="scroller">
      <list>
        <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
            <text class="text" :ref="'text'+index">{{name}}</text>
        </div>
      </list>
    </scroller>
</template>