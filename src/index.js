// React
import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// CSS
import './styles/index.css'

// Components
import App from './components/App/App'

// Render
ReactDOM.render(<App />, document.getElementById('root'))

// Service Worker
registerServiceWorker()
