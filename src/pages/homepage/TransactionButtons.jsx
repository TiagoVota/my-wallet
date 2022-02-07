import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'


const TransactionButtons = () => {
	const navigate = useNavigate()

	const handleClick = (pageType) => navigate(`/transactions/${pageType}`)

	
	return (
		<Container>
			<Button onClick={() => handleClick('entry')}>
				<IoAddCircleOutline size={'30px'} />

				Nova<br/>entrada
			</Button>
			
			<Button onClick={() => handleClick('outflow')}>
				<IoRemoveCircleOutline size={'30px'} />
				
				Nova<br/>saída
			</Button>
		</Container>
	)
}


export default TransactionButtons


const Container = styled.div`
	width: 100vw;
	height: 21vh;
	padding: 0 7vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Button = styled.button`
	width: 47%;
	height: 90%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 5px;
	text-align: start;
	font-weight: bold;
	font-size: 17px;
	line-height: 20px;
`
