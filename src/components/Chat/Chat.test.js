/* eslint-env jest */
/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import Chat from './Chat'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(<Chat />, div)
})

it('Form Functions Properly', () => {
  // const chat = TestUtils.renderIntoDocument(<Chat />)
  // const chatNode = ReactDOM.findDOMNode(chat)

  // Input field starts empty
  // expect(chatNode.querySelector('input').textContent).toEqual('')

  // You can add text to the input field
  // chatNode.querySelector('input').textContent = 'Testing'
  // expect(chatNode.querySelector('input').textContent).toEqual('Testing')

  // Submitting the form adds to the list of messages
  // const messsagesList = chatNode.querySelector('ul').children.length
  // console.log(messsagesList)

  // const buttonNode = chatNode.querySelector('button')

  // buttonNode.click()

  // console.log(chatNode.querySelector('ul').children.length)

  // expect(chatNode.querySelector('ul').children.length).toEqual(messsagesList + 1)

  // Simulate a click and verify that it is now On
  // TestUtils.Simulate.change(
  //   TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  // )
  // expect(checkboxNode.textContent).toEqual('On')
})
