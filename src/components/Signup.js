import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*
	TODO
	- Mensagens de erro e sucesso

 */

function SignupComponent(props) {

	const { fields, isLoading, handleChange, login } = props;

	const inputs = Object.values(fields);

	return (
		<div className="default-container m-auto">
			<form method="POST" className="text-center" id="cadastroForm">
				<div className="header bg-dark-custom mb-4 gradient-dark">
					<span className="h3 font-weight-bold m-auto">Cadastre-se</span>
				</div>
				<div className="text-left mt-3">
					{
						inputs.map((input) => {
							return (
								<div key={ input.id }>
									<label htmlFor={ input.id }>{ input.label }</label>
									<input
										id={ input.id }
										type={ input.type }
										onChange={ handleChange }
										className="form-control"
									/>
									<div className="invalid-feedback" id={ "feedback" + input.id }></div>
								</div>
							)
						})
					}
				</div>
				<input
					className="btn btn-lg btn-custom btn-block mt-4"
					type="submit"
					id="btnCadastrar"
					value="Cadastrar"
					disabled={ isLoading }
				/>
			</form>
			<hr className="my-4" />
			<p className="small">Já tem uma conta?</p>
			<button
				className="btn btn-outline-custom"
				id="btnLogin"
				onClick={ login }>
				Entrar
			</button>
		</div>
	)
}

function SignupScreen(props) {

	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const [isMounted, setIsMounted] = useState();

	useEffect(() => {
		setIsMounted(true);
		return setIsMounted(false);
	});

	const handleChange = e => {
		console.log("weeeeeeeeeee")
		const { id, value } = e.target;
		setUserData(prevState => ({
			...prevState,
			[id]: value
		}));
	}

	const handleSubmit = e => {
		// TODO
		e.preventDefault();

		if (!isLoading) {
			setIsLoading(true);

			/* loginAsync()
				.then(() => {
					if (isMounted) {setIsLoading(false)};
				}) */
		}
	}

	const login = () => {
		history.push("/login")
	}

	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
		confirm_password: ''
	});

	const inputs = {
		name: {id: 'name', type: 'text', label: 'Name' },
		email: {id: 'email', type: 'email', label: 'Email'},
		password: {id: 'password', type: 'password', label: 'Password'},
		confirm_password: {id: 'confirm_password', type: 'password', label: 'Confirm your password'}
	}

	return (
		<SignupComponent
			fields={ inputs }
			handleChange={ handleChange }
			// handleSubmit={ handleSubmit }
			isLoading={ isLoading }
			login={ login }
		/>
	)
}

export { SignupScreen }
