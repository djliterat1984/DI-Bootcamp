import React, { type ReactNode, useState, useEffect } from 'react'

interface User{
	users: Data[];
	loading: boolean;
	error?: string;
}

export interface Data {
	id:       number;
	name:     string;
	username: string;
	email:    string;
	address:  Address;
	phone:    string;
	website:  string;
	company:  Company;
}

export interface Address {
	street:  string;
	suite:   string;
	city:    string;
	zipcode: string;
	geo:     Geo;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Company {
	name:        string;
	catchPhrase: string;
	bs:          string;
}


const UserList = (): ReactNode => {
	
	const [usersData, setUsersData] = useState<User>({users:[],loading:true})
	
	const loadData = async (): Promise<void> => {
		try {
			const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
			const data = await response.json();
			setUsersData( { users: data, loading: false } );
		} catch ( err ) {
			console.log(err);
			setUsersData({users:[], loading:false, error:'Something not good happens'})
		}
	} 
	
	useEffect(() :void=> {
		loadData() 
	}, [])
	
	
	if ( usersData.error ){
		return (
			<h4>{usersData.error}</h4>
		)
	}
	
	if ( usersData.loading ){
		return (
			<h4>Loading...</h4>
		)
	}
	
	return (
		<div>
			{ usersData.users.map( user => {
				return (
					<div key={user.id}>
						<h3>{user.name}</h3>
					</div>
				)
			} ) }
		</div>
	)
}

export default UserList