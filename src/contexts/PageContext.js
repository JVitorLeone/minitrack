import React from 'react';
import { LoginScreen } from '../components/Login'

export const pages = [
	(<LoginScreen />),
	(<div> Componente 1 </div>),
	(<div> Componente 2 </div>),
	(<div> Componente 3 </div>),
	(<div> Componente 4 </div>),
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