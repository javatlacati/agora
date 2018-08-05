// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispachToProps } from '../../store'

// Components
import Card from './Card'
import Comments from './Comments'

// Style
import './Announcements.css'

// Home Component
class AnnouncementShow extends React.Component {
  render () {
    const { id } = this.props.match.params
    const i = this.props.announcements.findIndex((announcement) => announcement._id === id)
    const announcement = this.props.announcements[i]
    const announcementComments = this.props.comments[id] || []
    return (
      <div>
        <Card i={i} announcement={announcement} {...this.props} />
        <Comments announcementComments={announcementComments} {...this.props} />
      </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispachToProps)(AnnouncementShow)

export default App
