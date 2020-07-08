import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Auth'

/*
	TODO
	- Adicionar símbolo de carregando...
	- Mensagens de erro e sucesso

 */

function LoginComponent(props) {

	return (
		<div className="default-container login-container">
			<form
				className="text-center"
				id="loginContainer"
				method="POST"
				onSubmit={ props.handleSubmit }
			>
				<div className="header bg-dark-custom mb-4 gradient-dark">
					<p className="h3 font-weight-bold ">Entrar</p>
				</div>
				<label htmlFor="inputEmail" className="sr-only">UsuÃ¡rio</label>
				<input
					type="text"
					className="form-control"
					placeholder="Email"
					name="email"
					onChange={ props.handleChange }
					value={ props.credentials.email }
					required
				/>
				<label htmlFor="inputPassword" className="sr-only">Senha</label>
				<input
					type="password"
					className="form-control"
					placeholder="Password"
					name="password"
					onChange={ props.handleChange }
					value={ props.credentials.password }
					required
				/>
				<input
					type="submit"
					className="btn btn-lg btn-custom btn-block mt-3"
					id="btnEntrar"
					value="Entrar"
				/>
				<button
					onClick={props.clearStorage}
					value="Limpar storage"
				>
					limpar
				</button>
				<hr className="my-3 color-light"></hr>
				<p className="small">Ainda nÃ£o Ã© cadastrado?</p>
				<a className="btn btn-outline-custom" id="btnCadastro" href="#">Cadastrar</a>
			</form>
		</div>
	)
}

export function LoginScreen(props) {

	const [credentials, setCredentials] = useState({email: '', password: ''})
	const [isLoading, setIsLoading] = useState(false)

	const auth = useAuth()

	// Consider using useEffet hook to handle dismount
	const handleSubmit = e => {
		e.preventDefault()

		setIsLoading(true)

		const options = {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: JSON.stringify(credentials),
		}

		fetch('/api/login_jwt/', options)
			.then(res =>  res.json())
			.then((token) => {
					if (token.erro) {
						console.log("Erro: " + token.erro)
					} else {
						auth.login(token);
					}
					setIsLoading(false);
				},
				(error) => {
					console.log(error);
					setIsLoading(false);
				}
			);

		return
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="form-signin">
			{ isLoading ? (
				<div>Carregando...</div>
			):(
				<LoginComponent
					credentials={credentials}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					clearStorage={() => auth.logout()}
				/>
			)}
		</div>
	)
}
