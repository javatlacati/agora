// Dependencies
import React, { Component } from 'react'
import axios from 'axios'

// API
import API_URL from '../../URLS.js'

// Style
import '../../styles/ForumsContainer.css'

// ForumsContainer Component
class ForumsContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      forums: []
    }
  }

  componentDidMount () {
    axios.get(API_URL + 'api/forums')
      .then((res) => {
        this.setState({
          forums: res.data
        })
      })
      .catch((err) => { console.log(err) })
  }

  render () {
    let forums = this.state.forums.map((forum, index) => (
      <li key={index}><a href={'/forums/' + forum._id}>{forum.title}</a></li>
    ))
    return (
      <div>
        Here is a list of our forums:
        <ul>
          {forums}
        </ul>
      </div>
    )
  }
}

export default ForumsContainer
