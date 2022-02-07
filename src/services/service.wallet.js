import axios from 'axios'

import BASE_URL from './baseUrl'

import { makeConfig } from '../helpers/configHelper'


const sendTransaction = ({ token, value, description }) => {
	const body = { value, description }

	return axios.post(`${BASE_URL}/transactions`, body, makeConfig(token))
}


const getBalance = (token) => {
	return axios.get(`${BASE_URL}/balance`, makeConfig(token))
}


export {
	sendTransaction,
	getBalance,
}
