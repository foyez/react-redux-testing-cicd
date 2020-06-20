import React from 'react'
import { shallow } from 'enzyme'

import { CounterButton } from './CounterButton'

describe('CounterButton Component', () => {
  const color = 'red'
  const wrapper = shallow(<CounterButton color={color} />)

  it('expects to render CounterButton component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('correctly increments the counter', () => {
    wrapper.find('#counter').simulate('click')
    wrapper.find('#counter').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2 })

    wrapper.find('#counter').simulate('click')
    expect(wrapper.state()).toEqual({ count: 3 })

    expect(wrapper.props().color).toEqual('red')
  })
})
