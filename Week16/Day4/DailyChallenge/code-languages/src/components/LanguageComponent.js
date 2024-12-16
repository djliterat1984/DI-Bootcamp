import React from 'react'

export default function LanguageComponent(props) {
	const { votes, name, handleVotes, position } = props;
	
	console.log(handleVotes, position, name, votes);
	
	
	return (
		<div style={{display:'flex', justifyContent:'center', backgroundColor:'beige', width:'20%'}}>
			<h4 style={{marginRight: 20, width:'40px'}}>{ votes }</h4>
			<h4 style={{marginRight: 20, width:'100px'}}>{ name }</h4>
			<button onClick={() => handleVotes(position)}>Click Here</button>
		</div>
	)
}
