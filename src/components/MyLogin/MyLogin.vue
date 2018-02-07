<template>
	<div class="mylogin">
	  <!-- 登录页面 -->
	   <div  v-show="formflag===0" class="login_box">
	   	 <el-form label-width="100px" class="demo-ruleForm">
			  <el-form-item label="username">
			    <el-input type="text" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="password">
			    <el-input type="password"></el-input>
			  </el-form-item>
			  <p @click="formflag=1">忘记密码</p>
			  <el-form-item>
			    <el-button type="primary" @click="accountSubmit">登录</el-button>
			  </el-form-item>
		 </el-form>
	   </div>
	   <!-- 忘记密码页面 -->
	   <div  v-show="formflag===1" class="forget_password_box">
	   	 <el-form label-width="100px" class="demo-ruleForm">
			  <el-form-item label="手机号码">
			    <el-input type="text" placeholder="请输入绑定的手机号"></el-input>
			  </el-form-item>
			  <el-form-item label="验证码">
			    <el-input placeholder="请输入验证码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="formflag=2">下一步</el-button>
			  </el-form-item>
		 </el-form>
	   </div>
	   <!-- 重设密码页面 -->
	   <div  v-show="formflag===2" class="forget_password_box">
	   	 <el-form label-width="100px" class="demo-ruleForm">
			  <el-form-item label="输入密码">
			    <el-input type="text" placeholder="请输入6-20位密码"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码">
			    <el-input placeholder="请再次输入密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="formflag=0">完成</el-button>
			  </el-form-item>
		 </el-form>
	   </div>
	</div>

</template>

<script>

    import qs from 'qs';
    import http from '../../common/js/ajaxfn.js'
    import ApiSetting from "../../common/js/apisetting.js";  
    import { mapGetters,mapMutations } from 'vuex'
    import store from 'store'

	export default {
	   data (){
	   	return {
	   		formflag:0,//0为登录，1为忘记密码，2为重设密码
	   	}
	   },
	   computed:{
	   	...mapGetters([
	   		'TOKEN_KEY'
	   		])
	   },
       methods:{
       	...mapMutations([
          		'RECORD_ACTIVENAME'
          	]),
       	accountSubmit (){
       		var logininfo={
	              userName:'admin',
	              password:'txd123'
	        }

		    // });
	     //    	if(res.token) {
	     //    	this.$Message.error('请求失败了');
	     //        console.log(error);
	     //    .then((res)=>{
	     //    http(ApiSetting.loginConfig,logininfo)
	     //    },(error)=>{
      //               store.set(res.token);
      //               this.$Message.error('123');
      //           }
      //           } else {

		    // 先把选中的导航默认为第一个
		    this.RECORD_ACTIVENAME('1');
		    store.set('activename','1');
		    
		    this.$router.push('/home');

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
