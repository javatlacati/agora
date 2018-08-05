// Dependencies
import React from 'react'
import axios from 'axios'

// Componenets
import Card from './Card'

// API
import { API_URL } from '../../constants.js'

// Style
import './Forums.css'

// ForumsContainer Component
class Forums extends React.Component {
  constructor (props) {
    super()
    this.state = {
      forums: []
    }
    this.listForums = this.listForums.bind(this)
    this.deleteForum = this.deleteForum.bind(this)
  }

  listForums () {
    axios.get(API_URL + 'api/forums/')
      .then((res) => { this.setState({forums: res.data}) })
      .catch((err) => { console.log(err) })
  }

  deleteForum (e) {
    axios.delete(API_URL + 'api/forums/' + e.target.dataset.id)
      .then((res) => { this.listForums() })
      .catch((err) => { console.log(err) })
  }

  componentDidMount () {
    this.listForums()
  }

  render () {
    let forums = this.state.forums.map((forum, index) => (
      <Card forum={forum} key={index} deleteForum={this.deleteForum} />
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

export default Forums
