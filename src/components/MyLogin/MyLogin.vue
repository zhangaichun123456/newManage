<template>
	<div class="mylogin">
	   <div class="login_box">
	   	 <Form ref="formValidate" :model="loginformValidate" :rules="loginruleValidate" :label-width="80">
		   	 <FormItem label="username" prop="username">
	            <Input v-model="loginformValidate.username" placeholder="请输入用户名"></Input>
	         </FormItem>
	         <FormItem label="password" prop="password">
	            <Input v-model="loginformValidate.password" placeholder="请输入密码"></Input>
	         </FormItem>
	         <FormItem>
	            <Button type="primary" @click="accountSubmit">登录</Button>
	         </FormItem>
	   	 </Form>
	   </div>
	</div>

</template>

<script>
    import qs from 'qs';
    import http from '../../common/js/ajaxfn.js'
    import ApiSetting from "../../common/js/apisetting.js";  

	export default {
	   data (){
	   	return {
	   		loginformValidate: {
                    username: '',
                    password: '',
                },
            loginruleValidate:{
            	username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                ],
            }
	   	}
	   },
       methods:{
       	accountSubmit (){
       		var logininfo={
	          'schoolId':1,
	          'appId':3,
	          'userId':1,
	          'excludeUserIds':"",
	        }
	        // this.$ajax.get('http://192.168.30.80:8080/disk-admin/api/department/schoolById',qs.stringify(logininfo)).then(function(res) {
         //          console.log(res)
         //          });

	        /**
	        */
	        http(ApiSetting.ceshiLocation,logininfo)
	        .then((res=>{
	        	console.log(res)
	        }),(error)=>{  
		      console.log(error)      
		    }); 
       	},
       }
	}
</script>


<style scoped lang="scss">

@import "~@/common/scss/const";

.mylogin {
	color:$color-theme;
}
	
</style>
