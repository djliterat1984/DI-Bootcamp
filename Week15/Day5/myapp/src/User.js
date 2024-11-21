import { styleOptions } from './css/userStyle';
import './css/user.css';
import { Button } from '@mui/material';

const User = ( props ) => {
	
	const { name, username, email, id } = props.info;
	
	// const styleOptions = {
	// 		display: 'inline-block',
	// 		border: '1px solid',
	// 		margin: '20px',
	// 		padding: '20px',
	// 		textAlign:'center'
	// 	} 
	
	return (
		<div classname='userbox'>
			<img src={`https://robohash.org/${id}?size=150x150`} />
			<h2>Name: { name }</h2>
			<h3>Username: { username }</h3>
			<p>email: { email }</p>
			<Button variant="contained">Text</Button>
		</div>
	);
};

export default User;