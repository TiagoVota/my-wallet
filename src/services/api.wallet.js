import axios from 'axios'

import BASE_URL from './baseUrl'

import { makeConfig } from '../helpers/configHelper'


const getTransactions = ({ token }) => {
	return axios.get(`${BASE_URL}/transactions`, makeConfig(token))
}


const sendTransaction = ({ token, value, description }) => {
	const body = { value, description }

	return axios.post(`${BASE_URL}/transactions`, body, makeConfig(token))
}


export {
	getTransactions,
	sendTransaction,
}
