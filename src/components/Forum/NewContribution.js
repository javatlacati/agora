// Dependencies
import React from 'react'
import axios from 'axios'

// API
import { API_URL } from '../../constants.js'

// Style
import './Forums.scss'

// Home Component
class NewContribution extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      text: '',
      forumId: this.props.match.params.id
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
    document.getElementById('author').disabled = true
    document.getElementById('text').disabled = true
    document.getElementById('submit-button').disabled = true
    let contribution = {
      contribution: {
        'author': this.state.author,
        'text': this.state.text,
        'forumId': this.state.forumId
      }
    }
    axios.post(API_URL + 'api/contributions/', contribution)
      .then((res) => {
        this.props.getContributions()
        document.getElementById('author').disabled = false
        document.getElementById('text').disabled = false
        document.getElementById('submit-button').disabled = false
        this.refs.contributionForm.reset()
      })
      .catch((err) => { console.log(err) })
  }

  render () {
    return (
      <div>
        <hr />
        <h5>Your Response</h5>
        <div className='row'>

          <form className='col s12' ref='contributionForm' onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='input-field col s12'>
                <input type='text' className='validate' id='author' name='author' ref='author' onChange={this.handleInputChange} />
                <label>Author</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <textarea type='text' className='materialize-textarea validate' id='text' name='text' ref='text' onChange={this.handleInputChange} />
                <label>Text</label>
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

export default NewContribution
