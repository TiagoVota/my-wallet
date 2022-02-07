const makeBalance = (transactionsList) => {
	return transactionsList.reduce((total, { value }) => total + value, 0) || 0
}

const sanitizeMoney = (value) => {
	if (typeof value !== 'number') return '0,00'

	return value.toFixed(2).replace('.', ',')
}


export {
	makeBalance,
	sanitizeMoney,
}
