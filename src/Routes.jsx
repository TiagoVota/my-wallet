import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import {
	Login,
	SignUp,
	Homepage,
	NewEntry,
	NewOutflow,
	EditEntry,
	EditOutflow,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<ResetStyleCSS />
			<GlobalStyle />

			<Routes>
				<Route path='/auth/login' element={<Login />}/>
				<Route path='/auth/sign-up' element={<SignUp />}/>
				<Route path='/' element={<Homepage />}/>
				<Route path='/transactions/entry' element={<NewEntry />}/>
				<Route path='/transactions/outflow' element={<NewOutflow />}/>
				<Route path='/transactions/entry/edit/:transactionId' element={<EditEntry />}/>
				<Route path='/transactions/outflow/edit/:transactionId' element={<EditOutflow />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
