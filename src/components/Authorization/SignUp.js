// Dependencies
import React, {Component} from 'react'
import axios from 'axios'

// API
import API_URL from '../../URLS.js'

// Style
import {Row, Input, Button} from 'react-materialize'

class SignUp extends Component {
  constructor (props) {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false,
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    let target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    let path = API_URL + 'auth/signup'
    axios.post(path, {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data.token) {
          window.localStorage.setItem('jwt', res.data.token)
          window.localStorage.setItem('userID', res.data.user._id)
        } else if (res.data.message) {
          this.setState({ message: res.data.message })
        } else { console.log('something went wrong receiving jwt or message') }
      })
  }

  render () {
    return (
      <div>
        <Row>
          <Input name='email' type='email' onChange={this.handleInputChange} label='Email' s={12} />
          <Input name='password' type='password' onChange={this.handleInputChange} label='password' s={12} />
          <Input name='confirmPassword' type='password' onChange={this.handleInputChange} label='confirm password' s={12} />
          <Input name='acceptedTerms' type='checkbox' value='red' onChange={this.handleInputChange} label='I have read and accept the terms of conditions and the privacy policy.' />
        </Row>
        <Row>
          <Button onClick={this.handleSubmit} className='right' waves='light'>Sign Up</Button>
        </Row>
      </div>
    )
  }
}

export default SignUp
