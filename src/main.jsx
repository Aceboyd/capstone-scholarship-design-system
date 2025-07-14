import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // The imported App component
import "./index.css"; // Ensure Tailwind CSS is applied

// Define and render the main application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithErrorBoundary /> {/* Render the App with ErrorBoundary */}
  </React.StrictMode>
);

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error occurred:', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// New component to wrap App inside ErrorBoundary
function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
