import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const apiBaseUrl = 'http://localhost:5001/';

const Login = () => {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [ error, setError ] = useState( "" );
  
	const navigate = useNavigate();
	
	const handleSubmit = async ( e ) => {
    e.preventDefault();
    console.log( email,password );
		setError( '' );
		try {
			const response = await axios.post(
				`${ apiBaseUrl }api/user/login`,
				{ email, password },
        { withCredentials: true, headers:{} }
			);
			console.log(response);
			
			const { user, token, message } = response.data
			console.log( { user, token, message } );
			setError( message )
      login( user, token );
			navigate('/')
			
		} catch (error) {
			console.log(error);
			setError(error.response?.data?.message || 'Loginfailed')
		}

	}
	return (
		<div className='auth-form-container'>
			<h2>Login</h2>
			<form onSubmit={handleSubmit} className='auth-form' >
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

		    <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
					/>
		   
        </div>
         <button onClick={() => console.log('clicked')} >Submit</button>
		  </form>
    </div>
	)
}

export default Login