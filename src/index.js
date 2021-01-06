import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './user/userContext'

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

