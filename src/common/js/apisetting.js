// 基础部分url
const baseUrl='http://192.168.30.22';


const ajaxModule = {  
	// 登录
  loginConfig :{
  	url:baseUrl+'/disk-admin/api/login/',
  	method:'post'
  },
  // 忘记密码
  forgetpwConfig :{
  	url:baseUrl+'/api/manage/users/doValidate/',
  	method:'post'
  },
  // 重设密码
  resetpwConfig :{
  	
  }
}

const ApiSetting = {...ajaxModule }  
  
export default ApiSetting  