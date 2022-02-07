import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import {
	Login,
	SignUp,
	Homepage,
	NewEntry,
	NewOutflow,
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
				<Route path='/transaction/entry' element={<NewEntry />}/>
				<Route path='/transaction/outflow' element={<NewOutflow />}/>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
