import React from 'react';
import styled from 'styled-components';

function FormWrapper(props) {
	return (
		<FormStyled {...props}>
			{ props.children }
		</FormStyled>
	)
}

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	padding: 20px;
`;

export { FormWrapper }