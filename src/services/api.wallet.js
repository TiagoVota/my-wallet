import axios from 'axios'

import { makeConfig } from '../helpers/configHelper'

import BASE_URL from './baseUrl'


const TRANSACTIONS_URL = `${BASE_URL}/transactions`

const getTransactions = ({ token }) => {
	return axios.get(`${TRANSACTIONS_URL}`, makeConfig(token))
}


const sendTransaction = ({ token, value, description }) => {
	const body = { value, description }

	return axios.post(`${TRANSACTIONS_URL}`, body, makeConfig(token))
}


const editTransaction = ({ token, transactionId, value, description }) => {
	const body = { value, description }

	return axios.put(`${TRANSACTIONS_URL}/${transactionId}`, body, makeConfig(token))
}


const deleteTransaction = ({ token, transactionId }) => {
	return axios.delete(`${TRANSACTIONS_URL}/${transactionId}`, makeConfig(token))
}


export {
	getTransactions,
	sendTransaction,
	editTransaction,
	deleteTransaction,
}
