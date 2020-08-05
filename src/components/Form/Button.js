import React from 'react';
import styled from 'styled-components';

function Button(props) {
	return (
		<ButtonStyled {...props}>
			{ props.value }
		</ButtonStyled>
	)
}

const ButtonStyled = styled.button`

	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	color: #fff;
	background-color: var(--main-accent-color);
	border-color: var(--main-accent-color);


	:hover {
		color: #fff;
		background-color: var(--sec-accent-color);
		border-color: var(--sec-accent-color);
		box-shadow: inset 3px 3px 7px rgba(0,0,0,0.05),
					inset -3px -3px 7px rgba(0,0,0,0.05),
					0 4px 15px rgba(0,0,0,0.1);
		transition-duration: 0.2s;
	}

	:focus {
		color: #fff;
		background-color: var(--main-accent-color);
		border-color: var(--main-accent-color);
		box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.2);
	}

	:disabled {
		color: #fff;
		background-color: var(--opc-accent-color);
		border-color: var(--opc-accent-color);
	}

	/* TODO outline */


`;

export { Button }