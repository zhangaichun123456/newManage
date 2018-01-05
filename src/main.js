// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import '@/common/scss/index.scss'

Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
axios.defaults.withCredentials=true;//用axios发送post请求去登录，能成功返回数据，但是用作权限验证的cookie就是没有保存,经查阅，axios 默认不发送cookie，跨域也是一个原因，需要全局设置


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
