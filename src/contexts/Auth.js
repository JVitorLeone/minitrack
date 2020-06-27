import React, { useState } from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) {
	const [tokenJWT, setTokenJWT] = useState()
	const [user, setUser] = useState()


	// code for pre-loading the user's information if we have their token in
	// localStorage goes here
	// 🚨 this is the important bit.
	// Normally your provider components render the context provider with a value.
	// But we post-pone rendering any of the children until after we've determined
	// whether or not we have a user token and if we do, then we render a spinner
	// while we go retrieve that user's information.

	const data = {
		user: user,
		token: tokenJWT,
	}
	function loadLocalStorage(){}

	function setLocalStorage(data) {
		const objects = Object.entries(data)
		for (let [key, value] of objects) {
			localStorage.setItem("@minitrack/" + key, value)
		}
	}

	function clearStorage() {
		Object.keys(localStorage).forEach(function(key){
			if (key.includes('@minitrack')) {
				localStorage.removeItem(key)
			}
		});
	}

	// Make request to login an user
	// Expect to receive a JWT
	// Resolve the Promise if error
	function login(email, password) {
		const request_body = JSON.stringify({
			email: email,
			senha: password,
		})

		const options = {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: request_body,
		}

		const response = new Promise(resolve => {
			fetch('http://127.0.0.1:8000/api/login/', options)
				.then(response =>  response.json())
				.then(
					(data) => {
						if (data.erro) {
							return resolve(data)
						} else {
							setTokenJWT(data)
							setUser(data)
							setLocalStorage(data)
						}
					},
					(error) => {
						console.log(error)
						return resolve(error)
					}
				)
		})

		return response
	} // make a login request

	const register = () => { } // register the user

	const logout = () => { clearStorage() } // clear the token in localStorage and the user data
	// note, I'm not bothering to optimize this `value` with React.useMemo here
	// because this is the top-most component rendered in our app and it will very
	// rarely re-render/cause a performance problem.
	return (
		<AuthContext.Provider value={{ login, logout, register, data }} {...props}/>
	)
}
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
