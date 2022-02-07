import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoCloseOutline } from 'react-icons/io5'

import useAuth from '../../../hooks/useAuth'
import { deleteTransaction } from '../../../services/api.wallet'
import { makeDate } from '../../../services/dayjsService'
import { confirmModal, errorModal, successModal } from '../../../factories/modalFactory'

import MoneySpan from './MoneySpan'


const TransactionLine = ({ info, setMakeDeletion }) => {
	const { auth: { token } } = useAuth()
	const { date, description, value, _id: transactionId } = info
	const navigate = useNavigate()

	const pageType = Boolean(value >= 0) ? 'entry' : 'outflow'


	const redirectChangeTransaction = () => {
		return navigate(`/transactions/${pageType}/edit/${transactionId}`)
	}

	const handleDeleteTransaction = () => {
		confirmModal(
			'Deseja mesmo deletar essa transação?',
			'Essa ação não poderá ser desfeita 🥺',
			'Sim, delete ela!'
		).then(({ isConfirmed }) => {
			if (isConfirmed) removeTransaction()
		})
	}
	
	const removeTransaction = () => {
		deleteTransaction({ token, transactionId })
			.then(() => {
				setMakeDeletion({})
				successModal('Login realizado!')
			})
			.catch(({ request: { status }}) => handleFailDelete(status))
	}

	const handleFailDelete = (status) => {
		const msgStatus = {
			401: 'Não autorizado! Tente fazer o login novamente 🥺',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}


	return (
		<Container>
			<DescriptionBox onClick={redirectChangeTransaction}>
				<DateSpan>
					{makeDate(date || Date.now())}
				</DateSpan>
				
				{description}
			</DescriptionBox>

			<MoneyBox onClick={handleDeleteTransaction}>
				<MoneySpan>{value}</MoneySpan>

				<IoCloseOutline
					color={'#C6C6C6'}
					size={'18px'}
				/>
			</MoneyBox>
		</Container>
	)
}


export default TransactionLine


const Container = styled.div`
	padding: 9px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	line-height: 19px;
`

const DescriptionBox = styled.div`
	height: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
`

const MoneyBox = styled.div`
	height: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`

const DateSpan = styled.span`
	color: #C6C6C6;
	margin-right: 5px;
`
