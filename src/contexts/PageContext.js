import React from 'react';
import { LoginScreen } from '../components/Login'

export const pages = [
	(<LoginScreen />),
	(<div> Componente 1 </div>),
	(<div> Componente 2 </div>),
	(<div> Componente 3 </div>),
	(<div> Componente 4 </div>),
]

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

const PageContext = React.createContext(
	pages[0] // default value
);

function PageProvider() {
	return (
		<PageContext.Provider value={usePage()}>
			{usePage()}
		</PageContext.Provider>
	)
}

const usePage = () => React.useContext(PageContext)

export { PageProvider, usePage }