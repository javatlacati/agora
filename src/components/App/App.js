// React
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

// Components
// import Authorization from '../Authorization/Authorization'
import Forum from '../Forum/Forum'
import ForumsContainer from '../ForumsContainer/ForumsContainer'
import Chat from '../Chat/Chat'
import About from '../Static/About'
import Terms from '../Static/Terms'
import Privacy from '../Static/Privacy'
import Home from '../Home/Home'

// Style
import {Navbar, NavItem} from 'react-materialize'
import '../../styles/App.css'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      userLoggedIn: false,
      currentUser: {},
      token: ''
    }
  }

  render () {
    return (
      <Router >
        <div >
          <Navbar brand='&nbsp;&nbsp;&nbsp;Agora' href='/' right className='black' >
            {/* <NavItem inactive='true'> Sign In </NavItem> */}
            <NavItem href='/forums'> Forums </NavItem>
            <NavItem href='/chat'> Chat </NavItem>
            <NavItem href='/about'> About </NavItem>
            <NavItem href='/terms'> Terms </NavItem>
            <NavItem href='/privacy'> Privacy </NavItem>
          </Navbar>
          <main className='container' >
            {/* <Authorization /> */}
            <Switch >
              <Route path='/forums/:id' component={Forum} />
              <Route path='/forums' component={ForumsContainer} />
              <Route path='/chat' component={Chat} />
              <Route path='/about' component={About} />
              <Route path='/terms' component={Terms} />
              <Route path='/privacy' component={Privacy} />
              <Route path='/' component={Home} />
              <Route path='/*' render={() => <Redirect from='*' to='/' />} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
