<template>
	<div class="dptdetail">
        当前点击的是{{cur_depart.label}}
	</div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import store from 'store'

	export default{
         data (){
         	return {

         	}
         },
         computed: {
	       	...mapGetters([
	   		    'cur_depart'
	   		]),
	      },
	}
</script>

<style>
	
</style>