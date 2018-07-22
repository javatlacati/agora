// React
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

// Components
import Home from '../Home/Home'
import ForumsContainer from '../ForumsContainer/ForumsContainer'
import Chat from '../Chat/Chat'
import Forum from '../Forum/Forum'
import Authorization from '../Authorization/Authorization'

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
            <NavItem inactive='true'> Sign In </NavItem>
            <NavItem href='/forums'> Forums </NavItem>
            <NavItem href='/chat'> Chat </NavItem>
            <NavItem href='/about'> About </NavItem>
            <NavItem href='/terms'> Terms </NavItem>
            <NavItem href='/privacy'> Privacy </NavItem>
          </Navbar>
          <main className='container' >
            <Authorization />
            <Switch >
              <Route path='/forums/:id' component={Forum} />
              <Route path='/forums' component={ForumsContainer} />
              <Route path='/chat' component={Chat} />
              <Route path='/' component={Home} />
              {/* <Route path='/*' render={() => <Redirect to='/' />} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
