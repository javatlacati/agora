// Dependencies
import React from 'react'
import axios from 'axios'

// Components
import Card from './Card'
import NewContribution from './NewContribution'
import Contribution from './Contribution'

// API & Auth
import { API_URL, AUTH_HEADER } from '../../constants.js'

// Style
import './Forums.css'

// Forum Component
class Forum extends React.Component {
  constructor (props) {
    super()
    this.state = {
      forum: {}
    }
    this.deleteForum = this.deleteForum.bind(this)
  }

  deleteForum (e) {
    axios.delete(API_URL + 'api/forums/' + e.target.dataset.id)
      .then((res) => { this.props.history.push('/forums/') })
      .catch((err) => { console.log(err) })
  }

  componentDidMount () {
    let path = API_URL + 'api/forums/' + this.props.match.params.id
    axios.get(path, AUTH_HEADER)
      .then((res) => {
        this.setState({
          forum: res.data
        })
      })
      .catch((err) => { console.log(err) })
  }

  render () {
    // let contributions = this.state.forum.contributions.map((contribution, i) => {
    //   return (<Contribution author={contribution.author} content={contribution.content} key={i} />)
    // })
    return (
      <div>
        <Card forum={this.state.forum} deleteForum={this.deleteForum} />
        <NewContribution />
        <ul>
          <h4>List of Contributions:</h4>
          <Contribution author='Mike' content='Hi' />
          {/* {contributions} */}
        </ul>
      </div>
    )
  }
}

export default Forum
