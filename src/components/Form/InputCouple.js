import React from 'react';
import styled from 'styled-components';

function InputCouple(props) {
	return (
		<InputCoupleStyled {...props}>
			{ props.children }
		</InputCoupleStyled>
	)
}

const InputCoupleStyled = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	margin-bottom: 16px;
`;

export { InputCouple }