import React, { useEffect } from 'react'
import { useAuth } from '../auth/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ( { children } ) => {
  const location = useLocation();
  const { isAuthenticated, refreshAuth } = useAuth();
  
  useEffect( () => {
    refreshAuth();
  },[])
  if ( !isAuthenticated )
    return <Navigate to='/login' state={{from:location}} replace/>
  
	return children
}

export default ProtectedRoute