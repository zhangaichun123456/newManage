<template>
	<div class="MyHome">
		主页
		<img :src="homeimg">
	</div>
</template>

<script>
    import homeimg from './myhome.jpg'
	export default {
          data (){
          	return {
          		homeimg:homeimg,
          	}
          }
	}
</script>

<style scoped lang="scss">
	
</style>
