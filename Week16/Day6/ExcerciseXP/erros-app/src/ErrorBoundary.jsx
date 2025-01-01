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
                <>
                    <h2 style={{color:'black'}}>Something went wrong</h2>    
                    <details style={{ whiteSpace: 'pre-wrap' , backgroundColor:'black'}}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;