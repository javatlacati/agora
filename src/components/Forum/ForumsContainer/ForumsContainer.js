// Dependencies
import React, { Component } from 'react'
import axios from 'axios'

// API
import API_URL from '../../../URLS.js'

// Style
import './ForumsContainer.css'

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
      <li key={index} className='collection-item'>
        <a href={'/forums/' + forum._id}>{forum.title}</a>
        <p>{forum.description}</p>
      </li>
    ))
    return (
      <div>
        <button className='btn waves-effect waves-light black right' type='submit' name='action'>
          <a href='/forums/new' className='white-text'>
            Start A New Topic
            <i className='material-icons right'>send</i>
          </a>
        </button>
        <div className='clearfix' />

        <h3>Here is a list of our forums:</h3>
        <ul className='collection' >
          {forums}
        </ul>
      </div>
    )
  }
}

export default ForumsContainer
