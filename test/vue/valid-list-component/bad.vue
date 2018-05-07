<!-- bad 语法错误的 valid-scroller-component -->
<!-- 不要在 <list> 中嵌套 <scroller> -->
<template>
    <list class="list">
      <scroller>
        <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
            <text class="text" :ref="'text'+index">{{name}}</text>
        </div>
      </scroller>
    </list>
</template>