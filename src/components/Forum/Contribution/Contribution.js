// React % Socket.io
import React, { Component } from 'react'

// Style
import './Contribution.css'

// Contribution Component
class Contribution extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <li>- {this.props.author}: {this.props.content}</li>
    )
  }
}

export default Contribution
