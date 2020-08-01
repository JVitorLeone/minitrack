import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/Auth'

/*
	TODO
	- Mensagens de erro e sucesso

 */
function Loader(props) {
	return props.isLoading ? (
		<div className="loader">
			<div className="loader-gif"></div>
		</div>
	) : (
		<div></div>
	);
}

function LoginComponent(props) {

	const { credentials, isLoading, handleSubmit, handleChange, signUp } = props;

	return (
		<div className="form-signin">
			<div className="default-container login-container">
				<form
					className="text-center"
					id="loginContainer"
					onSubmit={ handleSubmit }
				>
					<div className="header bg-dark-custom mb-4 gradient-dark">
						<p className="h3 font-weight-bold ">Entrar</p>
					</div>
					<label htmlFor="inputEmail" className="sr-only">Email</label>
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						name="email"
						onChange={ handleChange }
						value={ credentials.email }
						required
					/>
					<label htmlFor="inputPassword" className="sr-only">Senha</label>
					<input
						type="password"
						className="form-control"
						placeholder="Senha"
						name="password"
						onChange={ handleChange }
						value={ credentials.password }
						required
					/>
					<input
						type="submit"
						className="btn btn-lg btn-custom btn-block mt-3"
						id="btnEntrar"
						value="Entrar"
						disabled={ isLoading }
					/>
				</form>
				<hr className="my-3 color-light"></hr>
				<p className="small">Ainda não é cadastrado?</p>
				<button
					className="btn btn-outline-custom"
					id="btnCadastro"
					onClick={ signUp }
				>
					Cadastrar
				</button>
			</div>
		</div>
	)
}

export function LoginScreen(props) {

	const auth = useAuth();
	const history = useHistory();
	const [credentials, setCredentials] = useState({email: '', password: ''});
	const [isLoading, setIsLoading] = useState(false);
	const [isMounted, setIsMounted] = useState();

	useEffect(() => {
		setIsMounted(true);
		return setIsMounted(false);
	});

	const handleSubmit = e => {
		e.preventDefault();

		if (!isLoading) {
			setIsLoading(true);

			loginAsync()
				.then(() => {
					if (isMounted) {setIsLoading(false)};
				})
		}
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setCredentials(prevState => ({
			...prevState,
			[name]: value
		}));
	}

	const signUp = () => {
		history.push("/signup");
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
				// Alerta de erro
				console.log("Erro: " + data.erro);
			} else {
				auth.login(data.token, () => { history.push("/home") });
			}
		} catch(error)  {
			console.log("Erro: " + error);
		}
	}

	return (
		<LoginComponent
			credentials={ credentials }
			handleChange={ handleChange }
			handleSubmit={ handleSubmit }
			isLoading={ isLoading }
			signUp={ signUp }
		/>
	)
}
