import React from 'react';
import styled from 'styled-components';

function Input(props) {
	return (
		<InputStyled {...props}>
			{ props.value }
		</InputStyled>
	)
}

const InputStyled = styled.input`
	display: block;
	width: 100%;
	padding: 0.3rem 0.8rem;
	font-size: 1rem;
	line-height: 1.5;
	color: var(--sec-dark-color);
	background-color: #fff;
	border: none;
	border-bottom: 2px solid var(--sec-light-color);
	border-radius: 2px;
	transition: border-color 0.15s, box-shadow 0.15s;

	:focus {
		color: #495057;
		border-color: var(--main-accent-color);
		outline: 0;
		box-shadow: 0 0 3px rgba(0,0,0,.15),
					0 0 3px rgba(0,0,0,.15);
	}
`;

export { Input }