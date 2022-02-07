import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
	
  html {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: normal;
    background-color: #FFFFFF;
  }
	
	button, input {
		border-width: 0px;
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: normal;
	}

	button {
		color: #FFFFFF;
		background-color: #A328D6;
	}

	input {
	color: #000000;

	::placeholder {
		color: #575757;
	}

	:focus {
		color: #8C11BE;
		outline: none;
	}
	}

	a {
		text-decoration: none;
	}

	strong {
		font-weight: bold;
	}
`


export default GlobalStyle
