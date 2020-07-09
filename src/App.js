import React, {useState} from 'react';
import { PageProvider } from "./contexts/PageContext"
import { useUser } from './contexts/User'
import { useAuth } from './contexts/Auth'
import { LoginScreen } from './components/Login'

import './style/bootstrap.css';
import './style/custom.css';

function App() {
	const auth = useAuth();
	const [currentPage, setCurrentPage] = useState(1);
	const [user, setUser] = useState(useUser());

	console.log(auth.isLogged());
	return auth.isLogged() ? (
		<PageProvider page={currentPage}/>
	) : (
		<LoginScreen />
	);
}

export default App;
