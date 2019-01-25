// React
import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'

// CSS
import './index.scss'

// Components
import App from './components/App/App'

// Throw errors in development, instead of console errors
if (window.location.hostname === 'localhost') {
  console.error = (error) => { throw new Error(error) }
}

// Render
ReactDOM.render(<App />, document.getElementById('root'))

// Service Worker
// registerServiceWorker()
