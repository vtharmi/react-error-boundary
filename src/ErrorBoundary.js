import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry {this.state.error && this.state.error.message}</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
