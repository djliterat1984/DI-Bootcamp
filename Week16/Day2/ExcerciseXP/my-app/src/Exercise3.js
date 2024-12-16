import React, { Component } from 'react';
import logo from './logo.svg'
import './Exercise.css'

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
	
	render() {
		return (
			<>
				<h1 style={ { color: 'red', backgroundColor: 'lightblue' } }>This is a header</h1>
				<h1 style={ style_header }>This is a header</h1>
				<div>
					<p className='para'>This is a paragraph</p>
					<a href='https://www.google.com' target='_blank'>This is a link</a>
					<form>
						This is a form <br />
						<input type='text' /><br />
						<input type='search' />
						<input type='submit' />
						
					</form>
					<div style={{display:'flex', backgroundColor:'black', justifyContent:'center', alignItems:'center', width:500 }}>
						<img style={{width:250, height:150}} src={logo} alt="logo"/>
						<h1 style={{color:'white'}}>React</h1>
					</div>
					
					<div>
						This is a list
						{ this.props.drinks.map( ( value, index ) => <h3 key={index}>{value}</h3>)}
					</div>
				</div>
			</>
		);
	}
}

export default Exercise;