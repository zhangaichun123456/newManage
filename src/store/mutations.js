import * as types from './mutations-types.js'

const mutations = {
	[types.RECORD_DEPT_DETAIL](state, data) {
	    state.cur_depart = data;
	  },
	[types.RECORD_ACTIVENAME](state, data) {
	    state.activename = data;
	  },
}

export default mutations
