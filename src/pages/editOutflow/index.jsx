import { useParams } from 'react-router-dom'

import { editTransaction } from '../../services/api.wallet'

import TransactionPage from '../shared/TransactionPage'


const EditOutflow = () => {
	const { transactionId } = useParams()

	return (
		<TransactionPage
			apiService={'PUT'}
			transactionType={'outflow'}
			submitTransaction={editTransaction}
			transactionId={transactionId}
		/>
	)
}


export default EditOutflow
