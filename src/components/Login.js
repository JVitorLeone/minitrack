import React, { useState } from 'react';
import { useAuth } from '../contexts/Auth'

function LoginComponent(props) {

	return (
		<div className="default-container login-container">
			<form
				className="text-center"
				id="loginContainer"
				method="POST"
				onSubmit={ props.login }
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

	const auth = useAuth()

	const login = e => {
		e.preventDefault()
		auth.login(values.email, values.password)
	}

	const handleChange = e => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
		}));
		console.log(values)
	};

	return (
		<div className="form-signin">
			<LoginComponent
				values={values}
				handleChange={handleChange}
				login={login}
			/>
		</div>
	)
}
