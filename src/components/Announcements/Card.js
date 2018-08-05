// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  render () {
    const { announcement, i, comments } = this.props
    return (
      <div className='col s12 m6'>
        <div className='card blue-grey darken-1'>

          <div className='card-content white-text'>
            <span className='card-title'>
              <Link to={`/announcements/${announcement._id}`}>{announcement.title}</Link>
            </span>
            <a onClick={this.props.increment.bind(null, i)} className='btn-floating halfway-fab waves-effect waves-light red'>
              <i className='material-icons'>thumb_up</i>
            </a>
            <p>{announcement.description}</p>
          </div>

          <div className='card-action'>
            <a>{announcement.up_votes} Up Votes</a>
            <Link to={`/announcements/${announcement._id}`}>
              {comments[announcement._id] ? `${comments[announcement._id].length} Comment(s)` : 'No Comments' }
            </Link>
          </div>

        </div>
        <br />
      </div>
    )
  }
}

export default Card
