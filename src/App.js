import React, { useState } from 'react';
import { Content } from './components/Content.js'
import { PageProvider } from "./contexts/PageContext.js"
import { useUser } from './contexts/User'

import './style/bootstrap.css';
import './style/custom.css';

/* Defines the toolbar items */
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
/* const toolItems = []; */

function showUser(user){
	console.log(user)
}
function App() {
	const [currentPage, setCurrentPage] = useState(0)
	const [toolBar, setToolBar] = useState(toolItems)
	const user = useUser()
	showUser(user)

	return user ? (
		<PageProvider currentPage={currentPage}>
			<Content
				changePage={(i) => setCurrentPage(i)}
			/>
		</PageProvider>
	) : (
		<div></div>
	)
}

export default App;
