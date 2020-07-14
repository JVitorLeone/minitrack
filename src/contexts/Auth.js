import React, { useState, useEffect } from 'react'
import { createTokenProvider } from './Token'
import App from '../App';

const AuthContext = React.createContext()

function AuthProvider(props) {
	const tokenProvider = createTokenProvider();
	const [isLoggedIn, setIsLoggedIn] = useState(tokenProvider.isLoggedIn());

	const login = token => {
		tokenProvider.setToken(token);
		setIsLoggedIn(true);
	};

	const logout = () => {
		tokenProvider.setToken(null);
		setIsLoggedIn(false);
	};

	const authFetch = async (input, init) => {
		const token = await tokenProvider.getToken();

		init = init || {};

		init.headers = {
			...init.headers,
			Authorization: `Bearer ${token}`,
		};

		return fetch(input, init)
	};

	const isLogged = isLoggedIn;

	return (
		<AuthContext.Provider value={{ login, logout, authFetch }} {...props}>
			<App isLogged={isLogged} />
		</AuthContext.Provider>
	)
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }
