import styled from 'styled-components'


const Balance = () => {

	const a = 1
	if (a === 1) {
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
			roi
		</Container>
	)
}


export default Balance


const Container = styled.div`
	width: calc(100vw - (7vw * 2));
	height: calc(100vh - 12vh - 21vh);
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
