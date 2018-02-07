<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app{
	height:100%;
}
// .usermana .ivu-tree .ivu-tree-title{
// 	position:relative;
// }
// .usermana .ivu-tree .ivu-tree-title:after{
// 	content:'';
// 	width:5px;
// 	height:5px;
// 	position:absolute;
// 	top:0;
// 	left:0;
// 	background:red;
// }
</style>
