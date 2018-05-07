<!-- bad 语法错误的 valid-style-selector -->
<!-- weex 仅支持 class 选择器及部分伪类选择器 -->
<template>
  	<div></div>
</template>
<style>
	// 不支持嵌套
	.child .next{
    	color: #fff;
	}
	// 不支持 ID 选择器
	#child {
		color: #fff;
	}
	// 不支持 标签 选择权
	div {
		color: #fff;
	}
	// 不支持 属性 选择权
	[name="name"] {
		color: #fff;
	}
	// 不支持 通配符 选择器
	* {
		color: #fff;
	}
</style>