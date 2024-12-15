import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser,addUserPrepare } from './usersSlice';

export const Users = () => {
	const users = useSelector( state => state.appReducer.usersReducer.users );
	const dispatch = useDispatch()
	
	console.log(users);
	const name = useRef()
	const email = useRef()
	const name2 = useRef()
	const email2 = useRef()
	
	return (
		<div>
			<input ref={name} type="text" placeholder='name' />
			<input ref={email} type="text" placeholder='email' />
			<button onClick={ () => {
				dispatch( addUser( {name: name.current.value, email: email.current.value }) )
				name.current.value = '';
				email.current.value = '';
			} }>Add User</button><br />
			
			<input ref={name2} type="text" placeholder='name' />
			<input ref={email2} type="text" placeholder='email' />
			<button onClick={ () => {
				dispatch( addUserPrepare( name2.current.value, email2.current.value ) )
				name.current.value = '';
				email.current.value = '';
			} }>Add User Prepare</button>
			
			{ users.map( ( item, index ) => {
				return (
					<div key={item.id}>
						<h2>{item.id}. { item.name } { item.email }</h2>	
					</div>
				)
			} ) }
		</div>
	)
}
