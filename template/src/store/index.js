import Vue from 'vue'
import Vuex from 'vuex'
{{#persistedStore}}
import createPersistedState from 'vuex-persistedstate'
{{/persistedStore}}

import * as getters from './getters'
import * as actions from './actions'
	
Vue.use(Vuex)
// need to add client here

	const state = {
		{{#persistedStore}}
		plugins: [createPersistedState({
			key: '{{ name }}'
		})],
		{{/persistedStore}}
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
