import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext( AuthContext );
	if ( !context )
		throw new Error( 'useauth must be used within an AuthProvider' )
	return context
}

const apiBaseUrl = 'http://localhost:5001';

export const AuthProvider = ( { children } ) => {
	
	const [user,setUser] = useState('')
	const [ token, setToken ] = useState( '' )
	
	const login = (user,token) => {
		setUser( user )
		setToken( token )
		localStorage.setItem( 'user', JSON.stringify( user ) );
		localStorage.setItem( 'token', token );
	}
	
  const refreshAuth = async () => {
    try {
      const response = await axios.get( `${apiBaseUrl}/api/user/auth`, {withCredentials:true})
    } catch (error) {
      
    }
  }
	
  const isAuthenticated = !!user && !!token
  
  useEffect(() => {
    const initAuth = async () => {
      const storedUser = localStorage.getItem( 'user' );
      const storedToken = localStorage.getItem( 'accessToken' );
      
      if ( storedUser && storedToken ) {
        await refreshAuth();
      } else {
        // setLoading( false );
      }
    }
  
    return () => {
      second
    }
  }, [third])
  
  
	return (
		<>
			<AuthContext.Provider
				value={ {
					user,
          token,
          login,
          // logout,
          isAuthenticated,
          refreshAuth
				} }
			>
			{ children}
		</AuthContext.Provider>
		</>
)
}