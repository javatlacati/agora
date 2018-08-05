// Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispachToProps } from '../../store'

// Components
import Card from './Card'

// Style
import './Announcements.css'

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>Announcements</h1>
        <div>
          {this.props.announcements.map((announcement, i) => <Card {...this.props} key={i} i={i} announcement={announcement} />)}
        </div>
      </div>
    )
  }
}

const AnnouncementsContainer = connect(mapStateToProps, mapDispachToProps)(Main)

export default AnnouncementsContainer
