import axios from 'axios'
import store from '@/store'

function request({ method = 'get', data, url }) {
	let credentials = store.getters.credentials

	let auth = {
		username: `${credentials.username}${
			credentials.token ? '/' : ''
			}:${credentials.token || credentials.password}`,
		password: credentials.token || credentials.password,
	}

	let config = {
		baseURL: store.getters.apiPath,
		method,
		auth,
		withCredentials: true,
		url,
		data,
	}

	return axios.request(config).then(resp => {
		return resp
	})
}

export default request
