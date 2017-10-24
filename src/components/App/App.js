// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

// Components
import Home from '../Home/Home'
import FormsContainer from '../FormsContainer/FormsContainer'
import Chat from '../Chat/Chat'

// Style
import '../../styles/App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Agora</Link>
            <Link to='/forms'>Forms</Link>
            <Link to='/chat'>Chat</Link>
          </nav>
          <main>
            <Switch>
              <Route path='/forms' component={FormsContainer} />
              <Route path='/chat' component={Chat} />
              <Route path='/' component={Home} />
              <Route path='/*' render={() => <Redirect to='/' />} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
