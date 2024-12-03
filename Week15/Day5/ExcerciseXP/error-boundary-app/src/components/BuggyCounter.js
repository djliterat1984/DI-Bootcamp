import React, { Component } from 'react';

class BuggyCounter extends Component {
  state= {
    counter: 0
  }
  
  handleClick () {
    if ( this.state.counter >= 5 )
      console.log(this.state);
			
    
		console.log(this.props);
		
    this.setState( {counter:this.state.counter + 1} );
  }
  
  render() {
    return (
			<div>
				{this.state.counter}
        <button onClick={()=> this.handleClick()}>add counter</button>
      </div>
    );
  }
}

export default BuggyCounter;