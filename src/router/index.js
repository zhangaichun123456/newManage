import Vue from 'vue'
import Router from 'vue-router'


const MyLogin = () => import('@/components/MyLogin/MyLogin')
const MyHome = () => import('@/components/MyHome/MyHome')

//首页
const homeindex = () => import('@/components/MyHome/homeindex/homeindex')

//用户管理
const usermana = () => import('@/components/MyHome/usermana/usermana')

//应用管理
const applimana = () => import('@/components/MyHome/applimana/applimana')

//单位设置
const unitsetting = () => import('@/components/MyHome/unitsetting/unitsetting')




Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'login',
	    component: MyLogin
    },
    {
		path:'/home',
		name:'home',
		component:MyHome,
		redirect:'/home/homeindex',
		children:[{
		    path:'homeindex',
		    component:homeindex,
		  },{
		  	path:'usermana',
		    component:usermana,
		  },{
		  	path:'applimana',
		    component:applimana,
		  },{
		  	path:'unitsetting',
		    component:unitsetting,
		  }]
	}
  ]
})
