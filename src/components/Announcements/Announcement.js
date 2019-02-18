// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispachToProps } from '../../store'

// Components
import Card from './Card'
import Comments from './Comments'

// Style
import './Announcements.scss'

// Announcement Component
class AnnouncementShow extends React.Component {
  constructor (props) {
    super()
    this.state = {
      announcement: {},
      announcementComments: [],
      i: null
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    const i = this.props.announcements.findIndex((announcement) => announcement._id === id)
    const announcement = this.props.announcements[i]
    const announcementComments = this.props.comments[id] || []
    this.setState({ announcement, announcementComments, i })
    setTimeout(() => { document.title = `Agora: ${this.state.announcement.title}` }, 2000)
  }

  render () {
    let [card, comments] = ['', '']
    if (this.state.i !== null) {
      card = <Card i={this.state.i} announcement={this.state.announcement} {...this.props} />
      comments = <Comments announcementComments={this.state.announcementComments} {...this.props} />
    }
    return (
      <div>
        {card} {comments}
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispachToProps)(AnnouncementShow)

export default App
