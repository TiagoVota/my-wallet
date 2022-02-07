import styled from 'styled-components'

import { makeDate } from '../../../services/dayjsService'

import MoneySpan from './MoneySpan'


const TransactionLine = ({ info }) => {
	const { date, description, value } = info

	return (
		<Container>
			<DescriptionBox>
				<DateSpan>{makeDate(date || Date.now())}</DateSpan>
				{description}
			</DescriptionBox>

			<MoneyBox>
				<MoneySpan>{value}</MoneySpan>
			</MoneyBox>
		</Container>
	)
}


export default TransactionLine


const Container = styled.div`
	padding: 9px;
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
