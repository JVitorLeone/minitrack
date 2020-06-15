import React from 'react';

export const pages = [
	(<div> Componente 0 </div>),
	(<div> Componente 1 </div>),
	(<div> Componente 2 </div>),
	(<div> Componente 3 </div>),
	(<div> Componente 4 </div>),
]

const PageContext = React.createContext(
	pages[0] // default value
);

function PageProvider(props) {
	return (
		<PageContext.Provider value={props.currentPage} {...props}/>
	)
}

const usePage = () => React.useContext(PageContext)

export { PageProvider, usePage }