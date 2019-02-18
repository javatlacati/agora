// React
import React from 'react'

// Privacy Component
class Privacy extends React.PureComponent {
  componentDidMount () {
    document.title = 'Agora: Privacy Policy'
  }

  render () {
    return (
      <div>
        <h1>Agora's privacy Policy</h1>
        <p>TBA</p>
      </div>
    )
  }
}

export default Privacy
