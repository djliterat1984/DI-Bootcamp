import React, { Component } from 'react';

class BuggyCounter extends Component {
  state= {
    counter: 0
	}
  
  handleClick = () => {
	    this.setState({counter: this.state.counter + 1});
	}
	
	render(){
  
	if ( this.state.counter == 5 )
      throw new Error('I crashed!')
	else
    return (
			<div style={ {
				display: 'flex', justifyContent: 'center', alignItems:'center'
			} }>
				<button
					onClick={ () => this.handleClick() }
					style={ { border: 'solid 1px black', backgroundColor: 'white' } }>
					<h3 style={ { color: 'black', marginRight: '15px' } }>{ this.state.counter }</h3>
				</button>
      </div>
    );
  }
}

export default BuggyCounter;