// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import NewContribution from './NewContribution'

class Card extends React.Component {
  render () {
    const { forum, deleteForum } = this.props
    return (
      <div className='col s12 m4'>
        <div className='card sticky-action'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img className='activator' src={forum.header} alt='Form Header' />
          </div>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>{forum.title}<i className='material-icons right'>more_vert</i></span>
            <p>{this.props.match.params.id ? forum.description : <Link to={`/forums/${forum._id}`}>Read More</Link>}</p>
            {/* <p><Link to={`/forums/${forum._id}`}>Read More</Link></p> */}
          </div>
          <div className='card-action'>
            <Link to='#' className='black-text' data-id={forum._id} >Update</Link>
            <Link to='#' className='black-text' data-id={forum._id} onClick={deleteForum}>Delete</Link>
            {this.props.match.params.id ? <div><br /><NewContribution {...this.props} /></div> : ''}
          </div>
          {this.props.match.params.id
            ? ''
            : <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>{forum.title}<i className='material-icons right'>close</i></span>
              <p>{forum.description}</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

// Card.propTypes = {
//   forum: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     header: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
//   }).isRequired,
//   deleteForum: PropTypes.func.isRequired,
//   getContributions: PropTypes.func.isRequired
// }
//
// Card.defaultProps = {
//   forum: {
//     _id: '000000',
//     title: 'No Title',
//     header: 'https://www.teachermagazine.com.au/files/ce-image/cache/1c03ffc10fd4ef6a/Computing-programming-and-coding-in-schools_855_513_48.jpg',
//     description: 'No Description'
//   }
// }

export default Card
