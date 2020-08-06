import React from 'react';
import styled from 'styled-components';

function FeedBack(props) {
	return (
		<FeedBackStyled {...props}>
			{ props.children }
		</FeedBackStyled>
	)
}

const FeedBackStyled = styled.div`
	font-size: 14px;
	color: red;

	line-height: 16px;

	padding: 2px 8px;

	display: ${ props => props.invalid ? '' : 'none' };
`;

export { FeedBack }