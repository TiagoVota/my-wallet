const makeBalance = (transactionsList) => {
	return transactionsList.reduce((total, { value }) => total + value, 0)
}


export {
	makeBalance,
}
