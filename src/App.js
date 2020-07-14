import React, { useState } from 'react';
import { PageProvider } from "./contexts/PageContext"
import { useUser } from './contexts/User'
import { LoginScreen } from './components/Login'

import './style/bootstrap.css';
import './style/custom.css';

function App(props) {
	const [currentPage, setCurrentPage] = useState(1);
	const [user, setUser] = useState(useUser());

	return props.isLogged ? (
		<PageProvider page={currentPage}/>
	) : (
		<LoginScreen />
	);
}

export default App;
