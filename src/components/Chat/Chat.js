// Dependencies
import React from 'react'
import openSocket from 'socket.io-client'

// API
import { API_URL } from '../../constants.js'

// Style
import './Chat.scss'

// Socket connection
const socket = openSocket(API_URL)

// Chat Component
class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount () {
    socket.on('initial messages', (messages) => { this.setState({ messages: messages }) })
    socket.on('chat message', (msg) => { this.setState({ messages: this.state.messages.concat(msg) }) })
  }

  submitMessage (e) {
    e.preventDefault()
    socket.emit('chat message', e.target.firstElementChild.value)
    e.target.firstElementChild.value = ''
  }

  render () {
    let messages = this.state.messages.map((message, i) => (
      <li key={i} className='collection-item avatar' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png' alt='' className='circle' />
        <span className='title'>Annonymous</span>
        <p>{message.body} <br />
          Created at: {message.createdAt}
        </p>
        {/* <a href='#!' className='secondary-content'><i className='material-icons'>grade</i></a> */}
      </li>
    ))
    return (
      <div className='chat'>
        <ul className='collection' id='messages'>{messages}</ul>
        <form className='input-field' onSubmit={this.submitMessage}>
          <input type='text' className='validate' />
          <label className='active'>Your Message</label>
          <button className='btn waves-effect black right waves-light' type='submit' name='action'>
            Submit<i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default Chat
