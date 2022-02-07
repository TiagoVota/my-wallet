const { NODE_ENV } = process.env


const BASE_URL = (NODE_ENV === 'production')
	? 'http://localhost:4242'
	: 'http://localhost:4242'


export default BASE_URL
