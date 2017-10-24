// React % Socket.io
import React, { Component } from 'react'
import openSocket from 'socket.io-client'

// Style
import '../../styles/Chat.css'

// Socket connection
const socket = openSocket('http://localhost:3001')

// Chat Component
class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount () {
    socket.on('chat message', (msg) => {
      this.setState({messages: this.state.messages.concat(msg)})
    })
  }

  submitMessage (e) {
    e.preventDefault()
    let msg = document.getElementById('message').value
    socket.emit('chat message', msg)
    document.getElementById('message').value = ''
  }

  render () {
    let messages = this.state.messages.map((message, i) => (<li key={i}>{message}</li>))
    return (
      <div>
        <ul id='messages'>{messages}</ul>
        <form action='' onSubmit={this.submitMessage}>
          <input id='message' /><button>Send</button>
        </form>
      </div>
    )
  }
}

export default Chat
