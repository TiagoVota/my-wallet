import { useContext } from 'react/cjs/react.production.min'

import AuthContext from '../contexts/AuthContext'


const useAuth = () => {
	return useContext(AuthContext)
}


export default useAuth
