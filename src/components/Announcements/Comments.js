// RDependencies
import React from 'react'

// Announcement Component
class Comments extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
  }

  renderComment (comment, i) {
    return (
      <li key={i} className='collection-item avatar' >
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png' alt='' className='circle' />
        <span className='title'>{comment.user}</span>
        <p>{comment.text} <br />
          Created at: Yesterday {/* {comment.createdAt} */}
        </p>
        <a className='secondary-content' onClick={this.props.removeComment.bind(null, this.props.match.params.id, i)}>
          <i className='material-icons'>delete_forever</i>
        </a>
      </li>
    )
  }

  handleSubmit (e) {
    e.preventDefault()
    const { id } = this.props.match.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(id, author, comment)
    this.refs.commentForm.reset()
  }

  render () {
    return (
      <div>
        <h3>Add Comment</h3>
        <form ref='commentForm' className='' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
        <h3>All Comments</h3>
        <ul className='collection'>
          {this.props.announcementComments.map(this.renderComment)}
        </ul>
      </div>
    )
  }
}

export default Comments
