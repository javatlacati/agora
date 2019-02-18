// React
import React from 'react'

// Terms Component
class Terms extends React.PureComponent {
  componentDidMount () {
    document.title = 'Agora: Terms of Service'
  }

  render () {
    return (
      <div>
        <h1>Agora's Terms of Service</h1>
        <p>TBA</p>
      </div>
    )
  }
}

export default Terms
