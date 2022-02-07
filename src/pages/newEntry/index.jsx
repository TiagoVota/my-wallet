import { sendTransaction } from '../../services/api.wallet'

import TransactionPage from '../shared/TransactionPage'


const NewEntry = () => {

	return (
		<TransactionPage
			apiService={'POST'}
			transactionType={'entry'}
			submitTransaction={sendTransaction}
		/>
	)
}


export default NewEntry
