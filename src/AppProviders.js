import React from 'react'
import { AuthProvider } from './contexts/Auth'

function AppProviders({ children }) {
	return (
		<AuthProvider>
			{children}
		</AuthProvider>
	)
}

export default AppProviders