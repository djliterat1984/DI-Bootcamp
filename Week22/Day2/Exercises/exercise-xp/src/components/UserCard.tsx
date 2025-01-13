import React, { type ReactNode } from 'react'

type Role = 'Admin' | 'Worker' | 'Director'; 
interface props{
	name?: string;
	age?: number;
	role?: Role
}

const UserCard = ( { name = 'John', age = 40, role= 'Worker' } :props):ReactNode => {
	return (
		<>
			<h3>Name: { name } - Age: { age } - Role: { role}</h3>
		</>
	)
}

export default UserCard