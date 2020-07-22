import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	useHistory,
	Redirect
} from 'react-router-dom';

import { useUser } from './contexts/User'
import { LoginScreen } from './components/Login'
import { HomeScreen } from './components/Home'
import { useAuth } from './contexts/Auth'

import './style/bootstrap.css';
import './style/custom.css';

function App(props) {
	const [user, setUser] = useState(useUser());

	return (
		<BrowserRouter>
			<Switch>
				<AuthRoute path="/home" exact={true} component={ HomeScreen } />
				<Route path="/teste" exact={true} component={ teste } />
				<Route path="/login" component={ LoginScreen } />
				<Route path='*' />
			</Switch>
		</ BrowserRouter>
	);
}

function AuthRoute({children, ...props}){
	const auth = useAuth();

	return auth.isLogged() ? (
		<Route {...props} {...children} />
	) : (
		<Route>
			<Redirect
				to={{
					pathname: "/teste",
					state: { from: "todo" }
				}}
			/>
		</Route>
	)
}

function teste(props) {
	return <div>Pare já aí meliante, você precisa se identificar!</div>
}

export default App;
