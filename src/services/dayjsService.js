import dayjs from 'dayjs'


const makeDate = (timestamp) => {
	const date = dayjs(timestamp)

	return date.format('DD/MM')
}


export {
	makeDate,
}
