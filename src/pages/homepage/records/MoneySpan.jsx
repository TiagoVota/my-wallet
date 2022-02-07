import styled from 'styled-components'

import { sanitizeMoney } from '../../../helpers/transactionsHelper'


const MoneySpan = ({ children: value, isBalance }) => {
	return (
		<MoneyText isBigText={isBalance} isProfit={value >= 0}>
			{sanitizeMoney(value)}
		</MoneyText>
	)
}


export default MoneySpan


const MoneyText = styled.span`
	font-size: ${p => p.isBigText ? '17px' : '16px'};
	line-height: ${p => p.isBigText ? '20px' : '19px'};
	color: ${p => p.isProfit ? '#03AC00' : '#C70000'};;
`
