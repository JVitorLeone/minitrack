import React from 'react';
import styled from 'styled-components';

function Label(props) {
	return (
		<LabelStyled {...props}>
			{ props.children }
		</LabelStyled>
	)
}

const LabelStyled = styled.label`
	font-size: 16px;
	line-height: 18px;

	margin-bottom: 4px;
`;

export { Label }