import { sendTransaction } from '../../services/api.wallet'

import TransactionPage from '../shared/TransactionPage'


const NewOutflow = () => {

	return (
		<TransactionPage
			apiService={'POST'}
			transactionType={'outflow'}
			submitTransaction={sendTransaction}
		/>
	)
}


export default NewOutflow
