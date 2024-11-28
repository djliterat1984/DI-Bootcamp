import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		}
	}
	
	static getDeriveStateFromError = ( error ) => {
		return {hasError: true}
	}
	
	componentDidCatch = ( error, errorInfo ) => {
		console.log('*',error);
		console.log('**',errorInfo);
		
		// this.setState({hasError: true})
	}
	
	render () {
		if ( this.state.hasError )
			return <h2>{this.props.fallback}</h2>;
		
		return this.props.children;
	}
}