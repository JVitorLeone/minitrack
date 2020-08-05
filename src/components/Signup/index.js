import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*
	TODO
	- Mensagens de erro e sucesso

 */

import { DefaultContainerWithHeader } from '../DefaultContainer';
import {
	Container,
	FormWrapper,
	InputCouple,
	Label,
	FeedBack
} from './styles';
import { Button, Input } from '../Form';

function SignupComponent(props) {

	const { userInputs, isLoading, handleChange, login } = props;

	const inputs = Object.values(userInputs);

	return (
		<Container>
			<DefaultContainerWithHeader
				title={"Cadastre-se"}
				max_width={ 500 } >
				<FormWrapper>
					{
						inputs.map(input => {
							return (
								<InputCouple key={ input.id } >
									<Label>{ input.label }</Label>
									<Input
										id={ input.id }
										type={ input.type }
										onChange={ handleChange }
										invalid={ input.isInvalid }
									/>
									<FeedBack invalid={ input.isInvalid }>
										{"inputs.message"}
									</FeedBack>
								</InputCouple>
							);
						})
					}
					<Button
						className="btn btn-lg btn-custom btn-block mt-4"
						id="btnCadastrar"
						value="Confirmar"
						disabled={ isLoading }
					/>
				</FormWrapper>
			</DefaultContainerWithHeader>
			<hr className="my-4" />
			<p className="small">Já tem uma conta?</p>
			<button
				className="btn btn-outline-custom"
				id="btnLogin"
				onClick={ login }>
				Entrar
			</button>
		</Container>
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

	const [userData, setUserData] = useState({
		name: {
			id: 'name',
			type: 'text',
			label: 'Name',
			val: '',
			isInvalid: true
		},
		email: {
			id: 'email',
			type: 'email',
			label: 'Email',
			val: '',
			isInvalid: false
		},
		password: {
			id: 'password',
			type: 'password',
			label: 'Password',
			val: '',
			isInvalid: false
		},
		confirm_password: {
			id: 'confirm_password',
			type: 'password',
			label: 'Confirm password',
			val: '',
			isInvalid: false
		}
	});

	const handleChange = e => {

		const { id, value } = e.target;
		let fieldState = userData[id];

		fieldState.isInvalid = mask(value, fieldState.type);
		fieldState.val = value;

		setUserData(prevState => ({
			...prevState,
			[id]: fieldState
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

	function mask(value, type) {
		return true;
	}


	return (
		<SignupComponent
			userInputs={ userData }
			handleChange={ handleChange }
			// handleSubmit={ handleSubmit }
			isLoading={ isLoading }
			login={ login }
		/>
	)
}

export { SignupScreen }
