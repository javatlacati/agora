// React
import React, {Component} from 'react'

// Components
import SignIn from './SignIn'
import SignUp from './SignUp'

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
    let toRender = (this.state.hasAccount)
      ? <SignIn /> : <SignUp />
    return (
      <div>
        <h2><a onClick={this.getSignIn}>Sign In</a> | <a onClick={this.getSignUp}>Sign Up</a></h2>
        {toRender}
      </div>
    )
  }
}

export default Authorization
