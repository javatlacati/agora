// Dependencies
import React from 'react'
import axios from 'axios'

// Components
import Card from './Card'
import Contribution from './Contribution'

// API & Auth
import { API_URL, AUTH_HEADER } from '../../constants.js'

// Style
import './Forums.scss'

// Forum Component
class Forum extends React.Component {
  constructor (props) {
    super()
    this.state = {
      forum: {},
      contributions: [],
      dataReady: false
    }
    this.deleteForum = this.deleteForum.bind(this)
    this.getForum = this.getForum.bind(this)
    this.getContributions = this.getContributions.bind(this)
    this.deleteContribution = this.deleteContribution.bind(this)
  }

  getForum () {
    let path = API_URL + 'api/forums/' + this.props.match.params.id
    axios.get(path, AUTH_HEADER)
      .then((res) => {
        this.setState({ forum: res.data, dataReady: true })
        setTimeout(() => { document.title = `Agora: ${this.state.forum.title}` }, 1000)
      })
      .catch((err) => { console.log(err) })
  }

  getContributions () {
    let path = API_URL + 'api/contributions/' + this.props.match.params.id
    axios.get(path, AUTH_HEADER)
      .then((res) => { this.setState({ contributions: res.data || [] }) })
      .catch((err) => { console.log(err) })
  }

  deleteForum (e) {
    let path = API_URL + 'api/forums/' + e.target.dataset.id
    axios.delete(path, AUTH_HEADER)
      .then((res) => { this.props.history.push('/forums/') })
      .catch((err) => { console.log(err) })
  }

  deleteContribution (e) {
    e.preventDefault()
    axios.delete(API_URL + 'api/contributions/' + e.target.dataset.id)
      .then((res) => { this.getContributions() })
      .catch((err) => { console.log(err) })
  }

  componentDidMount () {
    this.getForum()
    this.getContributions()
  }

  render () {
    let card = (this.state.dataReady)
      ? <Card {...this.props} forum={this.state.forum} deleteForum={this.deleteForum} getContributions={this.getContributions} />
      : ''
    let contributions = this.state.contributions.length <= 0
      ? <p>&nbsp; &nbsp; &nbsp; &nbsp;No responses to this topic so far.</p>
      : this.state.contributions.map((contribution, i) => {
        return (
          <Contribution
            contribution={contribution}
            key={i}
            deleteContribution={this.deleteContribution} />
        )
      })
    return (
      <div>
        {card}
        <ul className='collection'>
          <h4>&nbsp; &nbsp;Responses:</h4><hr />
          {contributions}
        </ul>
      </div>
    )
  }
}

export default Forum
