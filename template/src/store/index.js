import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)
// need to add client here

const state = {
	apiPath: 'https://api....',
	credentials: {
		username: '',
		password: '',
		token: '', 
		account: {}
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
