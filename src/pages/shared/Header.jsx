import styled from 'styled-components'


const Header = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	)
}


export default Header


const Container = styled.header`
	width: 100vw;
	height: 12vw;
	padding: 0 7vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;
`
