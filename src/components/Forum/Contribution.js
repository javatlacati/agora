// React % Socket.io
import React from 'react'

// Style
import './Forums.css'

// Contribution Component
class Contribution extends React.Component {
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
