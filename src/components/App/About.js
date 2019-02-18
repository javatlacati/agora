// React
import React from 'react'

// About Component
class About extends React.PureComponent {
  componentDidMount () {
    document.title = 'About Agora'
  }

  render () {
    return (
      <div>
        <h1>About Agora</h1>
        <p> TBA</p>
      </div>
    )
  }
}

export default About
