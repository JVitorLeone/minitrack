import React from 'react';

import { ToolBar } from "./ToolBar";
/*
	TODO
	- Adicionar símbolo de carregando...
	- Mensagens de erro e sucesso

 */
function Loader(props) {
	return props.isLoading ? (
		<div className="loader">
			<div className="loader-gif"></div>
		</div>
	) : (
		<div></div>
	);
}

function HomeScreen(props) {
	return (
		<div>
			<ToolBar />
			<div><h1>Hello from home</h1></div>
		</div>
	)
}

export { HomeScreen }