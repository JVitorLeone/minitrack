import React, { useState } from 'react'

/*
	Este provider deve:
		- getToken:
			- Obter token do state
			- Verificar a validade do token
			- Atualizar o token, se necessário
		- setToken:
			- Gravar token na localStorage
			- Gravar token no state
		- isLoggedIn:
			- Verificar se o token está no state
 */
export const createTokenProvider = () => {

	let tokenJWT = localStorage.getItem('@minitrack/JWT');

	const getToken = async () => {
		if (!tokenJWT) {
			return null;
		}

		// TODO verificar expiration date

		return tokenJWT;
	};

	const setToken = token => {
		if (token) {
			localStorage.setItem("@minitrack/JWT", token);
		} else {
			localStorage.removeItem("@minitrack/JWT");
		}
		tokenJWT = token;
	};

	const isLoggedIn = () => {
		return !!tokenJWT;
	};

	return { getToken, setToken, isLoggedIn }
};
