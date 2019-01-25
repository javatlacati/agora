// React
import React, { Component } from 'react'

// Components
import SignIn from './SignIn'
import SignUp from './SignUp'

// Style
import './Authorization.scss'

class Authorization extends Component {
  constructor (props) {
    super()
    this.state = {
      hasAccount: true
    }
    this.getSignIn = this.getSignIn.bind(this)
    this.getSignUp = this.getSignUp.bind(this)
  }

  getSignIn () {
    this.setState({
      hasAccount: true
    })
  }

  getSignUp () {
    this.setState({
      hasAccount: false
    })
  }

  render () {
    return (
      <div>
        <ul className='tabs'>
          <li className='tab col s6'><a className='active black-text' href='#sign-in-tab'>Sign In</a></li>
          <li className='tab col s6'><a className='black-text' href='#sign-up-tab'>Sign Up</a></li>
        </ul>
        <div id='sign-in-tab' className='col s12'><SignIn /></div>
        <div id='sign-up-tab' className='col s12'><SignUp /></div>
      </div>
    )
  }
}

export default Authorization
