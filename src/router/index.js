import Vue from 'vue'
import Router from 'vue-router'
import home from './home'


const MyLogin = () => import('@/components/MyLogin/MyLogin')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: MyLogin
    },
    // 首页
    ...home,
  ]
})
