import { shallow, mount, render } from 'enzyme'
import React from 'react'

import { Card } from './Card'

describe('Card Component', () => {
  const robot = { name: 'foyez', email: 'foyez@email.com', id: 1 }

  it('expects to render Card component', () => {
    const wrapper = shallow(<Card {...robot} />)

    expect(wrapper).toMatchSnapshot()
  })
})
