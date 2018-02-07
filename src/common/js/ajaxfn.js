import axios from 'axios'  
import qs from 'qs'  
// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(config => {  
  // 处理请求之前的配置
  return config  
}, error => {  
  // 请求失败的处理
  return Promise.reject(error)  
}) 


// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(response => { 
  // 处理响应数据 
  return response  
}, error => {  
  // 处理响应失败
  return Promise.reject(error)  
}) 

function errorState(response) {  
  console.log(response)  
  // 如果http状态码正常，则直接返回数据  
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {  
    return response  
      // 如果不需要除了data之外的数据，可以直接 return response.data  
  }else{  
  	// 提示网络异常
    console.log("网络异常")
  }  
    
}  

function successState(res) {  
  console.log(res)
}    

const httpServer = (opts, data) => {  
  
    let Public = { //公共参数  
      // 'srAppid': ""  
    }  
  
    let httpDefaultOpts = { //http默认配置  
          method:opts.method,  
          // baseURL,  
          url: opts.url,  
          timeout: 10000,  
          params:Object.assign(Public, data),  
          data:qs.stringify(Object.assign(Public, data)),  
          // headers: opts.method=='get'?{  
          //   'X-Requested-With': 'XMLHttpRequest',  
          //   "Accept": "application/json",  
          //   "Content-Type": "application/json; charset=UTF-8"  
          // }:{  
          //   'X-Requested-With': 'XMLHttpRequest',  
          //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
          // }  
    }  
    if(opts.method=='get'){  
      delete httpDefaultOpts.data  
    }else{  
      delete httpDefaultOpts.params  
    }  
      
    let promise = new Promise(function(resolve, reject) {  
      axios(httpDefaultOpts).then(  
        (res) => {  
          successState(res)  
          resolve(res)  
        }  
      ).catch(  
        (response) => {  
          errorState(response)  
          reject(response)  
        }  
      )  
  
    })  
  return promise  
}  

export default httpServer  