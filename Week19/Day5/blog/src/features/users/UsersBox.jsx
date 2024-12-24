import React from 'react'
import { useFetchUsers, useUserSelector } from './state/hooks';
import { useEffect } from 'react';

const UsersBox = () => {
	
	const users = useUserSelector();
	const callFetchUsers = useFetchUsers();
	
	useEffect(() => {
		callFetchUsers();
	}, [])
	
	console.log(users);
	
	
	return (
		<>
			<h4>Authors</h4>
			<select>
				<option>Select Author...</option>
				{
					users.map( item => {
						return (
							<option key={ item.id }>{item.name}</option>
						)
					} )
				}
			</select>
		</>
	)
}

export default UsersBox;
