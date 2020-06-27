import React from 'react';
import { PageProvider } from "./contexts/PageContext.js"
import { useUser } from './contexts/User'
import ToolBar from './components/ToolBar.js';

import './style/bootstrap.css';
import './style/custom.css';

const toolItems = [
	{
		id: 1,
		iconName: "home",
		url: "#1",
	},
	{
		id: 2,
		iconName: "message-square",
		url: "#2",
	},
	{
		id: 3,
		iconName: "tool",
		url: "#3",
	},
	{
		id: 4,
		iconName: "log-out",
		url: "#4",
	},
]

function App() {
	const user = useUser()

	return user ? (
		<div>
			<ToolBar toolBar={toolItems} />
			Bem vindo
		</div>
	) : (
		<PageProvider>
		</PageProvider>
	)
}

export default App;
