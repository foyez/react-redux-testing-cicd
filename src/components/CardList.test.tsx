import React from 'react'
import { shallow } from 'enzyme'

import { CardList } from './CardList'

describe('Card Component', () => {
  const robots = [{ name: 'foyez', email: 'foyez@email.com', id: 1 }]

  it('expects to render Card component', () => {
    const wrapper = shallow(<CardList robots={robots} />)

    expect(wrapper).toMatchSnapshot()
  })
})
