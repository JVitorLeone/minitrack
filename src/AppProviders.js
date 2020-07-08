import React from 'react'
import { AuthProvider } from './contexts/Auth'
import { UserProvider } from './contexts/User'

function AppProviders({ children }) {
	return (
		<AuthProvider>
			{children}
		</AuthProvider>
	)
}

export default AppProviders