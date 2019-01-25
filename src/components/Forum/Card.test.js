/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Card from './Card'

describe('card', () => {
  let props
  let mountedCard

  const card = () => {
    if (!mountedCard) {
      mountedCard = mount(
        <Card {...props} />
      )
    }
    return mountedCard
  }

  beforeEach(() => {
    props = {
      forum: {
        _id: 'undefined',
        title: 'undefined',
        header: 'undefined',
        description: 'undefined'
      },
      match: { params: { id: 'undefined' } }
    }
    mountedCard = undefined
  })

  // // All tests will go here
  // it('renders without crashing', () => {
  //   const div = document.createElement('div')
  //   ReactDOM.render(<Card />, div)
  // })
  //
  // it('always renders a div', () => {
  //   const divs = card().find('div')
  //   expect(divs.length).toBeGreaterThan(0)
  // })
})
