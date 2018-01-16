export default {
	SET_CREDENTIALS(state, payload) {
		if (payload.username) {
			state.credentials.username = payload.username
		}
		if (payload.password) {
			state.credentials.password = payload.password
		}
		if (payload.token) {
			state.credentials.token = payload.token
		}
		if (payload.account) {
			state.credentials.account = payload.account
		}
	}
}
