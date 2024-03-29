// Dependencies
import React from 'react'
import axios from 'axios'

// API
import { API_URL } from '../../constants.js'

// Style
import './Forums.scss'

// Home Component
class NewTopic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (e) {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    document.getElementById('title').disabled = true
    document.getElementById('description').disabled = true
    document.getElementById('submit-button').disabled = true
    let forum = {
      forum: {
        'title': this.state.title,
        'description': this.state.description
      }
    }
    axios.post(API_URL + 'api/forums/', forum)
      .then((res) => { this.props.history.push('/forums/' + res.data._id) })
      .catch((err) => { console.log(err) })
  }

  render () {
    return (
      <div>
        <h3>Start A New Topic</h3>
        <div className='row'>

          <form className='col s12' onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='input-field col s12'>
                <input type='text' className='validate' id='title' name='title' onChange={this.handleInputChange} />
                <label>Title</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <textarea type='text' className='materialize-textarea validate' id='description' name='description' onChange={this.handleInputChange} />
                <label>Description</label>
              </div>
            </div>

            <button className='btn waves-effect black right waves-light' type='submit' id='submit-button' name='action'>
              Submit<i className='material-icons right'>send</i>
            </button>

          </form>

        </div>
      </div>
    )
  }
}

export default NewTopic
