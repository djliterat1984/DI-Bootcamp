import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div style={{display:'flex', gap:'10px'}}>
				<Link to='/'>Home</Link>
				<Link to='/Login'>Login</Link>
				<Link to='/Register'>Register</Link>
				<Link to='/Dashboard'>Dashboard</Link>
				<button>Logout</button>
			</div>
		</nav>
	)
}

export default Navbar