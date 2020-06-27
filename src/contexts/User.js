import React from 'react';
import { useAuth } from './Auth'

const UserContext = React.createContext()

const UserProvider = props => (
	<UserContext.Provider value={useAuth().user} {...props}/>
)

const useUser = () => React.useContext(UserContext)

export { UserProvider, useUser }