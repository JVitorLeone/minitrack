import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*
	TODO
	- Mensagens de erro e sucesso

 */

import { DefaultContainerWithHeader } from '../DefaultContainer';
import { Container } from './styles';
import {
	Button,
	Input,
	FormWrapper,
	InputCouple,
	Label,
	FeedBack
} from '../Form';

function SignupComponent(props) {

	const { userInputs, isLoading, handleChange, handleSubmit,login } = props;

	const inputs = Object.values(userInputs);

	return (
		<Container>
			<DefaultContainerWithHeader
				title={"Cadastre-se"}
				max_width={ 500 } >
				<FormWrapper onSubmit={ handleSubmit }>
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
						id="btnCadastrar"
						value="Confirmar"
						disabled={ isLoading }
						type="Submit"
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
		e.preventDefault();

		if (!isLoading) {
			setIsLoading(true);

			postUserData()
				.then(() => {
					if (isMounted) {setIsLoading(false)};
				})
		}
	}

	const login = () => {
		history.push("/login")
	}

	const postUserData = async() => {
		const options = {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: parsedUserData(),
		};

		try {
			let response = await fetch('/user/', options);
			let data = await response.json();

			if (data.erro) {
				// Alerta de erro
				console.log("Erro: " + data.erro);
			} else {
				console.log("Sucesso meu parça");
			}
		} catch(error)  {
			console.log("Erro: " + error);
		}
	}

	function parsedUserData() {
		let filteredData = {
			name: userData.name.val,
			email: userData.email.val,
			password: userData.password.val
		}

		return JSON.stringify(filteredData);
	}

	function mask(value, type) {
		return true;
	}


	return (
		<SignupComponent
			userInputs={ userData }
			isLoading={ isLoading }
			handleChange={ handleChange }
			handleSubmit={ handleSubmit }
			login={ login }
		/>
	)
}

export { SignupScreen }
