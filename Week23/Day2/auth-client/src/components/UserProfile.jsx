import React from 'react'
import { useAuth } from '../auth/useAuth'

const UserProfile = () => {
	const { user, isAuthenticated } = useAuth();
	
	if ( !isAuthenticated )
		return (<div>You are not logged in</div>)
	
	
	
	return (
		<div>Welcome, { user?.email}</div>
	)
}

export default UserProfile