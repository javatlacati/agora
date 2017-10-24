// React % Socket.io
import React, { Component } from 'react'

// Style
import '../../styles/Forum.css'

// Components
import Contribution from '../Contribution/Contribution'

// Forum Component
class Forum extends Component {
  constructor (props) {
    super()
    this.state = {
      forums: [
        {id: 0, title: 'JS', contributions: [{author: 'John', content: 'JS is the best!'}, {author: 'Juan', content: 'JS rocks!'}]},
        {id: 1, title: 'HTML', contributions: [{author: 'Mark', content: 'HTML is the best!'}, {author: 'Gabriel', content: 'HTML rocks!'}]},
        {id: 2, title: 'Ruby', contributions: [{author: 'Maria', content: 'Ruby is the best!'}, {author: 'Joanna', content: 'Ruby rocks!'}]},
        {id: 3, title: 'Python', contributions: [{author: 'Adam', content: 'Python is the best!'}, {author: 'Chris', content: 'Python rocks!'}]}
      ]
    }
  }

  render () {
    let forum = this.state.forums[this.props.match.params.id]
    let contributions = forum.contributions.map((contribution, i) => {
      return (<Contribution author={contribution.author} content={contribution.content} key={i} />)
    })
    return (
      <div>
        <ul>
          <h1>Forum Title: {forum.title}</h1>
          <ul>
            <h4>List of Contributions:</h4>
            {contributions}
          </ul>
        </ul>
      </div>
    )
  }
}

export default Forum
