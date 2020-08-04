import React from 'react';

import { Container, Header } from './styles';

function DefaultContainer(props) {
	return (
		<Container>
			{ props.children }
		</Container>
	);
}

function DefaultContainerWithHeader(props) {
	return (
		<Container>
			<Header>{ props.title }</Header>
			{ props.children }
		</Container>
	);
}

export { DefaultContainer, DefaultContainerWithHeader };