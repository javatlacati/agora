// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  render () {
    const { forum, deleteForum } = this.props
    return (
      <div className='collection-item'>
        <h3>
          <Link to={`/forums/${forum._id}`}>{forum.title}</Link>
        </h3>
        <p>{forum.description}</p>
        <button className='btn-small white-text black' data-id={forum._id} onClick={deleteForum}>Delete</button>
      </div>
    )
  }
}

export default Card
