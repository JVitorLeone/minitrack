import React, { useState } from 'react'
import { createTokenProvider } from './Token'

const AuthContext = React.createContext()

function AuthProvider(props) {
	const tokenProvider = createTokenProvider();
	const [isLoggedIn, setIsLoggedIn] = useState(tokenProvider.isLoggedIn());

	const login = (token, callback) => {
		tokenProvider.setToken(token);
		setIsLoggedIn(true);
		callback();
	};

	const logout = callback => {
		tokenProvider.setToken(null);
		setIsLoggedIn(false);
		callback();
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

	const isLogged = () => {
		return isLoggedIn;
	}

	return (
		<AuthContext.Provider value={{ login, logout, authFetch, isLogged }} {...props} />
	)
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }
