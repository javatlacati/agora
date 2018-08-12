// Dependencies
import React from 'react'

// Style
import './Forums.css'

// Contribution Component
class Contribution extends React.Component {
  render () {
    return (
      <li className='collection-item avatar'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png' alt='' className='circle' />
        <span className='title'>{this.props.contribution.author}</span>
        <p>{this.props.contribution.text}<br />
          {/* Created At: Now */}
        </p>
        <a className='secondary-content'>
          <i className='material-icons black-text grab' onClick={this.props.deleteContribution} data-id={this.props.contribution._id}>delete_forever</i>
        </a>
      </li>
    )
  }
}

export default Contribution
