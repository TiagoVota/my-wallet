import { AuthProvider } from './contexts/AuthContext'

import PagesRoutes from './Routes'


function App() {
	return (
		<AuthProvider>
			<PagesRoutes />
		</AuthProvider>
	)
}


export default App
