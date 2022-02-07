const makeBalance = (transactionsList) => {
	return transactionsList.reduce((total, { value }) => total + value, 0) || 0
}


const sanitizeMoney = (value) => {
	if (typeof value !== 'number') return '0,00'

	return value.toFixed(2).replace('.', ',')
}


const transactionPageInfo = (apiService, transactionType) => {
	const services = {
		'post': {
			title: 'Nova',
			button: 'Salvar',
			success: 'adicionada!'
		},
		'put': {
			title: 'Editar',
			button: 'Atualizar',
			success: 'atualizada!'
		}
	}
	const types = {
		'entry': {
			button: 'entrada',
			placeholder: 'Salário',
			success: 'Entrada'
		},
		'outflow': {
			button: 'saída',
			placeholder: 'Mercado',
			success: 'Saída'
		},
	}

	return {
		titleText: `${services[apiService].title} ${types[transactionType].title}`,
		buttonText: `${services[apiService].button} ${types[transactionType].button}`,
		placeholderText: `Ex.: ${types[transactionType].placeholder}`,
		successText: `${services[apiService].success} ${types[transactionType].success}`,
	}
}


export {
	makeBalance,
	sanitizeMoney,
	transactionPageInfo,
}
