import { useState, createContext } from 'react'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
	const persistedAuth = localStorage.getItem('auth')
	const [auth, setAuth] = useState(persistedAuth)

	const login = (authData) => {
		setAuth(authData)
		localStorage.setItem('auth', JSON.stringify(authData))
	}


	return (
		<AuthContext.Provider value={{ auth, login }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
