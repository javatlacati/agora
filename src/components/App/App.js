// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

// Components
import Home from '../Home/Home'
import ForumsContainer from '../ForumsContainer/ForumsContainer'
import Chat from '../Chat/Chat'
import Forum from '../Forum/Forum'

// Style
import '../../styles/App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Agora</Link>
            <Link to='/forums'>Forums</Link>
            <Link to='/chat'>Chat</Link>
          </nav>
          <main>
            <Switch>
              <Route path='/forums/:id' component={Forum} />
              <Route path='/forums' component={ForumsContainer} />
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
