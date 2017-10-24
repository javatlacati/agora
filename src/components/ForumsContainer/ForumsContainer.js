// React % Socket.io
import React, { Component } from 'react'

// Style
import '../../styles/ForumsContainer.css'

// ForumsContainer Component
class ForumsContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      forums: [{id: 0, title: 'JS'}, {id: 1, title: 'HTML'}, {id: 2, title: 'Ruby'}, {id: 3, title: 'Python'}]
    }
  }
  render () {
    let forums = this.state.forums.map((forum, index) => (
      <li key={index}><a href={'/forums/' + forum.id}>{forum.title}</a></li>
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
