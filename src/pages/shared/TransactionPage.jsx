import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import useAuth from '../../hooks/useAuth'
import {
	formatInputValue,
	formatTypeValue,
	transactionPageInfo
} from '../../helpers/transactionsHelper'
import { transactionSchema } from '../../schemas/transactionSchema'
import { handleValidation } from '../../validations/handleValidation'
import { errorModal, successModal } from '../../factories/modalFactory'

import Container from '../../components/Container'
import Header from './Header'


const TransactionPage = (props) => {
	const {
		apiService,
		transactionType,
		submitTransaction,
	} = props
	const { auth: { token } } = useAuth()
	const [formData, setFormData] = useState({})
	const navigate = useNavigate()
	const {
		titleText,
		buttonText,
		placeholderText,
		successText,
	} = transactionPageInfo(apiService, transactionType)


	const handleSubmit = (event) => {
		event.preventDefault()

		const sanitizedData = {
			...formData,
			value: formatInputValue(formData.value),
		}

		const {isValid, error} = handleValidation(sanitizedData, transactionSchema)
		if (!isValid) return errorModal(error)

		const body = {
			...sanitizedData,
			value: formatTypeValue(sanitizedData.value, transactionType),
			token,
		}

		submitTransaction(body)
			.then(() => {
				successModal(successText)

				returnHomepage()
			}).catch(({ request: { status }}) => handleFailSubmit(status))
	}

	const changeFormData = (atribute, value) => {
		const newFormData = { ...formData }
		newFormData[atribute] = value

		setFormData(newFormData)
	}

	const handleFailSubmit = (status) => {
		const msgStatus = {
			401: 'Não autorizado! Tente fazer o login novamente 🥺',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const returnHomepage = () => {
		setFormData({})
		navigate('/')
	}


	return (
		<Container isTransactionPage>
			<Header onClick={(returnHomepage)}>
				{titleText}
			</Header>

			<form onSubmit={handleSubmit}>
				<Label htmlFor='Valor'>Valor:</Label>
				<Input
					id='Valor'
					placeholder='Ex.: 42,00'
					type='text'
					onChange={({ target: { value }}) => changeFormData('value', value)}
					value={formData.value}
					required
				/>

				<Label htmlFor='Descrição'>Descrição:</Label>
				<Input
					id='Descrição'
					placeholder={placeholderText}
					type='text'
					onChange={({ target: { value }}) => changeFormData('description', value)}
					value={formData.description}
					required
				/>

				<Button type='submit'>
					{buttonText}
				</Button>
			</form>
		</Container>
	)
}


export default TransactionPage


const Label = styled.label`
	margin-left: 6%;
	font-size: 20px;
	line-height: 24px;
	color: #FFFFFF;
`

const Input = styled.input`
	width: 88%;
	height: 58px;
	margin: 0 6vw 4px;
	padding-left: 13px;
	font-size: 20px;
	background: #FFFFFF;
	border-radius: 5px;
	border-width: 0px;
`

const Button = styled.button`
	width: 88%;
	height: 46px;
	margin: 15px 6vw;
	border-radius: 5px;
	font-weight: bold;
	font-size: 20px;
	line-height: 23px;
`
