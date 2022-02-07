import { useParams } from 'react-router-dom'

import { editTransaction } from '../../services/api.wallet'

import TransactionPage from '../shared/TransactionPage'


const EditEntry = () => {
	const { transactionId } = useParams()

	return (
		<TransactionPage
			apiService={'PUT'}
			transactionType={'entry'}
			submitTransaction={editTransaction}
			transactionId={transactionId}
		/>
	)
}


export default EditEntry
