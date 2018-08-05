// Dependencies
import React, {Component} from 'react'
import axios from 'axios'

// API
import { API_URL } from '../../constants.js'

// Style
import {Row, Input, Button} from 'react-materialize'

class SignIn extends Component {
  constructor (props) {
    super()
    this.state = {
      email: '',
      password: '',
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    let path = API_URL + 'auth/login'
    axios.post(path, {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(res.data.token, res.data.user._id)
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
          <Input onChange={this.handleInputChange} name='email' type='email' label='Email' s={12} />
          <Input onChange={this.handleInputChange} name='password' type='password' label='password' s={12} />
          <Button onClick={this.handleSubmit} className='right' waves='light'>Sign In</Button>
        </Row>
      </div>
    )
  }
}

export default SignIn
