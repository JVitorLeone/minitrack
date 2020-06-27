import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/Auth'

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
						value={ props.values.email }
						required
					/>
				<label htmlFor="inputPassword" className="sr-only">Senha</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						onChange={ props.handleChange }
						value={ props.values.password }
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

	const [values, setValues] = useState({email: '', password: ''})
	const [isLoading, setIsLoading] = useState(false)

	const auth = useAuth()

	const handleSubmit = e => {
		e.preventDefault()

		setIsLoading(true)

		const login = auth.login(values.email, values.password)
			.then(response => {
				console.log(response)
				console.log("login - chegou")
				setIsLoading(false)
			})

		return
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setValues(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="form-signin">
			{isLoading?(
				<div>Carregando...</div>
			):(
				<LoginComponent
					values={values}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	)
}
