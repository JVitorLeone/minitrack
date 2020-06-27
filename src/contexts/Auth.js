import React, { useState } from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) {
	// code for pre-loading the user's information if we have their token in
	// localStorage goes here
	// 🚨 this is the important bit.
	// Normally your provider components render the context provider with a value.
	// But we post-pone rendering any of the children until after we've determined
	// whether or not we have a user token and if we do, then we render a spinner
	// while we go retrieve that user's information.
	const [user, setUser] = useState()

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
							console.log("cheguei aqui")
							setUser(data)
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

	const logout = () => { } // clear the token in localStorage and the user data
	// note, I'm not bothering to optimize this `value` with React.useMemo here
	// because this is the top-most component rendered in our app and it will very
	// rarely re-render/cause a performance problem.
	return (
		<AuthContext.Provider value={{ login, logout, register, user }} {...props}/>
	)
}
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
