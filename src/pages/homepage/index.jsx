import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoExitOutline } from 'react-icons/io5'

import useAuth from '../../hooks/useAuth'
import { makeLogout } from '../../services/api.auth'
import { errorModal, successModal } from '../../factories/modalFactory'

import Container from '../../components/Container'
import Header from '../shared/Header'
import Records from './records'
import TransactionButtons from './TransactionButtons'


const Homepage = () => {
	const navigate = useNavigate()
	const { auth: { name, token }, login } = useAuth()

	const handleExit = () => {
		makeLogout({ token })
			.then(() => {
				successModal('Logout realizado!')
			
				navigate('/auth/login')
				login({name: 'Fulano'})
				
				goLoginPage()
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	const handleFailLogin = (status) => {
		const msgStatus = {
			401: 'Não autorizado! Logout não realizado!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goLoginPage = () => {
		navigate('/auth/login')
		login({name: 'Fulano'})
	}

	return (
		<Container>
			<Header>
				Olá, {name || 'Fulano'}

				<ExitButton onClick={handleExit}>
					<IoExitOutline size={'33px'} />
				</ExitButton>
			</Header>

			<Records />

			<TransactionButtons />
		</Container>
	)
}


export default Homepage


const ExitButton = styled.button`
	width: 50px;
	height: 100%;
	padding: 0px;
	display: flex;
	justify-content: end;
	align-items: center;
	background-color: transparent;
`
