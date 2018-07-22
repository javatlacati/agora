// Dependencies
import React, { Component } from 'react'
import axios from 'axios'

// API
import API_URL from '../../URLS.js'

// auth
import AUTH_HEADER from '../../Auth.js'

// Style
import '../../styles/Forum.css'

// Components
// import Contribution from '../Contribution/Contribution'

// Forum Component
class Forum extends Component {
  constructor (props) {
    super()
    this.state = {
      forum: {}
    }
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
        <ul>
          <h1>Forum Title: {this.state.forum.title}</h1>
          <ul>
            <h4>List of Contributions:</h4>
            {/* {contributions} */}
          </ul>
        </ul>
      </div>
    )
  }
}

export default Forum
