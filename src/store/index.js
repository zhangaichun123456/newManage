import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'
import store from 'store'

Vue.use(Vuex)

const state = {
	TOKEN_KEY: store.get('jwtToken') || {},
	activename:store.get('activename') || '1',//当前选中的主导航类别
	cur_depart:{},//部门详情

}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
})
