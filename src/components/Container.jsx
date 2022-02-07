import styled from 'styled-components'

const Container = ({ children, isTransactionPage }) => {
	return (
		<Box isTransactionPage={isTransactionPage}>
			{children}
		</Box>
	)
}


export default Container


const Box = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
  flex-direction: column;
  justify-content: ${p => p.isTransactionPage ? 'start' : 'center'};
  align-items: center;
	background-color: #8C11BE;

`
