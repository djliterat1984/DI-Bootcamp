import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: '', errorInfo: "" };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch ( error, errorInfo ) {
        console.log('====>', error,errorInfo);
        
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <h1 style={{color:'black'}}>An error has ocurred</h1>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;