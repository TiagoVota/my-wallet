import { useState, useEffect } from 'react'
import styled from 'styled-components'

import useAuth from '../../../hooks/useAuth'
import { getTransactions } from '../../../services/api.wallet'
import { makeBalance } from '../../../helpers/transactionsHelper'
import { errorModal } from '../../../factories/modalFactory'

import TransactionLine from './TransactionLine'
import MoneySpan from './MoneySpan'


const Records = () => {
	const { auth: { token } } = useAuth()
	const [transactions, setTransactions] = useState([])
	const [balance, setBalance] = useState(0)
	const [makeDeletion, setMakeDeletion] = useState({})

	useEffect(() => {
		getTransactions({ token })
			.then(({ data }) => {
				setBalance(makeBalance(data))
				setTransactions(data)
			})
			.catch(({ request: { status } }) => handleFailGetTransaction(status))
	}, [token, makeDeletion])

	const handleFailGetTransaction = (status) => {
		const msgStatus = {
			401: 'Não autorizado! Tente fazer o login novamente 🥺',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}


	if (!transactions.length) {
		return (
			<Container>
				<NoBalanceText>
					Não há registros de<br/>entrada ou saída
				</NoBalanceText>
			</Container>
		)
	}

	return (
		<Container>
			<TransactionsBox>
				{
					transactions.map((transaction, index) => {
						return <TransactionLine
							key={index}
							info={transaction}
							setMakeDeletion={setMakeDeletion}
						/>
					})
				}
			</TransactionsBox>
			
			<BalanceBox>
				<BalanceSpan>SALDO</BalanceSpan>
				<MoneySpan isBalance>{balance}</MoneySpan>
			</BalanceBox>
		</Container>
	)
}


export default Records


const Container = styled.div`
	width: calc(100vw - (7vw * 2));
	height: calc(100vh - 12vh - 21vh);
	padding: 0 12px;
	border-radius: 5px;
	background-color: #FFFFFF;
`

const NoBalanceText = styled.h2`
	margin-top: calc((100vh - 12vh - 21vh - 2 * 23px) / 2);
	font-size: 20px;
	line-height: 23px;
	text-align: center;
	color: #868686;
`

const TransactionsBox = styled.div`
	width: 100%;
	height: 90%;
	padding-top: 10px;
	display: flex;
	overflow-y: scroll;
	flex-direction: column;
`

const BalanceBox = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const BalanceSpan = styled.span`
	font-weight: bold;
	font-size: 17px;
	line-height: 20px;
`
