// React % Socket.io
import React, { Component } from 'react'
// import openSocket from 'socket.io-client'
// import API_URL from '../../URLS.js'

// Style
import '../../styles/Chat.css'

// Socket connection
// const socket = openSocket(API_URL)

// Chat Component
class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  // componentDidMount () {
  //   socket.on('initial messages', (messages) => { this.setState({messages: messages}) })
  //   socket.on('chat message', (msg) => { this.setState({messages: this.state.messages.concat(msg)}) })
  // }

  // submitMessage (e) {
  //   e.preventDefault()
  //   socket.emit('chat message', e.target.firstElementChild.value)
  //   e.target.firstElementChild.value = ''
  // }

  render () {
    let messages = this.state.messages.map((message, i) => (
      <li key={i}>{message.body} - Created At: {message.createdAt}</li>
    ))
    return (
      <div>
        <ul id='messages'>{messages}</ul>
        <form onSubmit={this.submitMessage}>
          <input /><button>Send</button>
        </form>
      </div>
    )
  }
}

export default Chat
