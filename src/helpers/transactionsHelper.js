const makeBalance = (transactionsList) => {
	return transactionsList.reduce((total, { value }) => total + value, 0) || 0
}


const sanitizeMoney = (value) => {
	if (typeof value !== 'number') return '0,00'

	return value.toFixed(2).replace('.', ',')
}


const transactionPageInfo = (apiService, transactionType) => {
	const services = {
		'POST': {
			title: 'Nova',
			button: 'Salvar',
			success: 'adicionada!'
		},
		'PUT': {
			title: 'Editar',
			button: 'Atualizar',
			success: 'atualizada!'
		}
	}
	const types = {
		'entry': {
			title: 'entrada',
			button: 'entrada',
			placeholder: 'Salário',
			success: 'Entrada'
		},
		'outflow': {
			title: 'saída',
			button: 'saída',
			placeholder: 'Mercado',
			success: 'Saída'
		},
	}

	return {
		titleText: `${services[apiService].title} ${types[transactionType].title}`,
		buttonText: `${services[apiService].button} ${types[transactionType].button}`,
		placeholderText: `Ex.: ${types[transactionType].placeholder}`,
		successText: `${types[transactionType].success} ${services[apiService].success}`,
	}
}


const formatInputValue = value => Number(value.replace('-', '').replace(',', '.'))
const formatTypeValue = (value, transactionType) => {
	const valueDict = {
		'entry': value,
		'outflow': -1 * value,
	}
	return valueDict[transactionType]
}


export {
	makeBalance,
	sanitizeMoney,
	transactionPageInfo,
	formatInputValue,
	formatTypeValue,
}
