<template>
	<div class="mylogin">
		登录页面
		<button @click="accountSubmit">点击测试</button>
	</div>
</template>

<script>
    import qs from 'qs';

	export default {
       methods:{
       	accountSubmit (){
       		var logininfo={
	          'schoolId':1,
	          'appId':3,
	          'userId':1,
	          'excludeUserIds':"",
	        }
	        this.$ajax.get('http://192.168.30.80:8080/disk-admin/api/department/schoolById',qs.stringify(logininfo)).then(function(res) {
                  console.log(res)
                  });

	        /**
	        */

                  
                
       	},
       	// 
       	ajaxFn(url,dataParam) {

       	}
       }
	}
</script>


<style scoped lang="scss">

@import "~@/common/scss/const";

.mylogin {
	color:$color-theme;
}
	
</style>
