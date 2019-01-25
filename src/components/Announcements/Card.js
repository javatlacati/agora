// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  render () {
    const { announcement, i, comments, increment } = this.props
    return (
      <div className='col s12 m6'>
        <div className='card blue-grey darken-1'>

          <div className='card-content white-text'>
            <span className='card-title'>
              <Link to={`/announcements/${announcement._id}`}>{announcement.title}</Link>
            </span>
            <button onClick={increment.bind(null, i)} className='btn-floating halfway-fab waves-effect waves-light red'>
              <i className='material-icons'>thumb_up</i>
            </button>
            <p>{announcement.description}</p>
          </div>

          <div className='card-action'>
            <Link to={`/announcements/${announcement._id}`}>
              {announcement.up_votes} Up Votes &nbsp; &nbsp; &nbsp;
              {comments[announcement._id] ? `${comments[announcement._id].length} Comment(s)` : 'No Comments' }
            </Link>
          </div>

        </div>
        <br />
      </div>
    )
  }
}

Card.propTypes = {
  announcement: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    up_votes: PropTypes.number.isRequired
  }).isRequired,
  i: PropTypes.number.isRequired,
  comments: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired
}

Card.defaultProps = {
  announcement: {
    _id: '000000',
    title: 'No Title',
    description: 'No Description',
    up_votes: 0
  },
  i: 0,
  comments: {}
}

export default Card
