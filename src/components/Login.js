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
				<label htmlFor="inputEmail" className="sr-only">Usuário</label>
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
				<hr className="my-3 color-light"></hr>
				<p className="small">Ainda não é cadastrado?</p>
				<a className="btn btn-outline-custom" id="btnCadastro" href="#">Cadastrar</a>
			</form>
		</div>
	)
}

export function LoginScreen(props) {

	const auth = useAuth();
	const [credentials, setCredentials] = useState({email: '', password: ''});
	const [isLoading, setIsLoading] = useState(false);

	// Consider using useEffet hook to handle dismount
	const handleSubmit = e => {
		e.preventDefault();

		setIsLoading(true);
		loginAsync()
			.then(() => {
				setIsLoading(false);
			})
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials(prevState => ({
			...prevState,
			[name]: value
		}));
	}

	const loginAsync = async () => {
		const options = {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: JSON.stringify(credentials),
		};

		try {
			let response = await fetch('/api/loginJWT/', options);
			let data = await response.json();

			if (data.erro) {
				console.log("Erro: " + data.erro);
			} else {
				console.log("token: " + data.token);
				console.log(data.user);
				auth.login(data.token);
			}
		} catch(error)  {
			console.log(error);
		}
	}

	return (
		<div className="form-signin">
			{ isLoading ? (
				<div>Carregando...</div>
			):(
				<LoginComponent
					credentials={credentials}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	)
}
