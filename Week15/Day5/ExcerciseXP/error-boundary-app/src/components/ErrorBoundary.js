import React, { Component } from 'react';

class ErrorBoundary extends Component {

	constructor(props) {
		super( props )
		this.state = {
			hasError: false,
			error: '',
			info:''
		}
	}
	
	componentDidCatch ( error, info ) {
		const updateState = { hasError: true, error: error, info }
		console.log('hola');
		
		this.setState(updateState )
	}
	
	render() {
		if ( this.state.hasError ) {
			return (
				<h1>error</h1>
				// <details style={ { whiteSpace: 'pre-wrap' } }>
				// 	{ this.state.error && this.state.error.toString() }
				// 	<br />
				// 	{ this.state.errorInfo.componentStack }
				// </details>
			)
		}
				
		
			return this.props.children;
	}
}

export default ErrorBoundary;