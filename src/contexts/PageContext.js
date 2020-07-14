import React from 'react';
import { LoginScreen } from '../components/Login'
import { useAuth } from './Auth';

export const pages = [
	(<LoginScreen />),
	(<div> Componente 1</div>),
	(<div> Componente 2 </div>),
	(<div> Componente 3 </div>),
	(<div> Componente 4 </div>),
];

function getPage(n) {
	return pages[n]
};

const PageContext = React.createContext(
	pages[0] // default value
);

function PageProvider(props) {
	const page = getPage(props.page);
	const auth = useAuth();

	return (
		<PageContext.Provider>
			{page}

			<button
				onClick={ () => { auth.logout() }}
				value="Limpar storage"
			>
			limpar
			</button>
		</PageContext.Provider>
	)
}

const usePage = () => React.useContext(PageContext)

export { PageProvider, usePage }