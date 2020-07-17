import React, { useState, useEffect } from 'react';
import { PageProvider } from "./contexts/PageContext"
import { useUser } from './contexts/User'
import { LoginScreen } from './components/Login'
import { useAuth } from './contexts/Auth'

import './style/bootstrap.css';
import './style/custom.css';

function App(props) {
	const auth = useAuth();
	const [currentPage, setCurrentPage] = useState(1);
	const [isLogged, setIsLogged] = useState(auth.isLogged());
	const [user, setUser] = useState(useUser());

	useEffect(() => {
		setIsLogged(auth.isLogged());
	}, [auth]);

	return isLogged ? (
		<PageProvider page={currentPage}/>
	) : (
		<LoginScreen />
	);
}

export default App;
