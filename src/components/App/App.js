// Dependencies
import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

// Store
// import store, { history } from '../../store'
import store from '../../store'

// Components
// import Authorization from '../Authorization/Authorization'
import NewTopic from '../Forum/NewTopic'
import Forum from '../Forum/Forum'
import Forums from '../Forum/Forums'
import Chat from '../Chat/Chat'
import About from './About'
import Terms from './Terms'
import Privacy from './Privacy'
import Home from './Home'
import Announcement from '../Announcements/Announcement'
import Announcements from '../Announcements/Announcements'

// Style
import {Navbar, NavItem} from 'react-materialize'
import './App.css'

class App extends React.Component {
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
      <Provider store={store}>
        {/* <Router history={history}> */}
        <Router>
          <div >
            <Navbar brand='&nbsp;&nbsp;&nbsp;Agora' href='/' right className='black nav' >
              {/* <NavItem inactive='true'> Sign In </NavItem> */}
              <NavItem href='/forums'> Forums </NavItem>
              <NavItem href='/chat'> Chat </NavItem>
              <NavItem href='/announcements'> Announcements </NavItem>
              <NavItem href='/about'> About </NavItem>
              <NavItem href='/terms'> Terms </NavItem>
              <NavItem href='/privacy'> Privacy </NavItem>
            </Navbar>
            <main className='container' >
              {/* <Authorization /> */}
              <Switch >
                <Route path='/forums/new' component={NewTopic} />
                <Route path='/forums/:id' component={Forum} />
                <Route path='/forums' component={Forums} />
                <Route path='/chat' component={Chat} />
                <Route path='/announcements/:id' component={Announcement} />
                <Route path='/announcements/' component={Announcements} />
                <Route path='/about' component={About} />
                <Route path='/terms' component={Terms} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/' component={Home} />
                <Route path='/*' render={() => <Redirect from='*' to='/' />} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
