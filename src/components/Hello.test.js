import React from 'react'
import Hello from './Hello'
import { shallow } from 'enzyme'

describe('Hello', () => {
  it('renders', () => {
    const wrapper = shallow(<Hello name='Jack' />)
    expect(wrapper.find('p').text()).toEqual('Hello, Jack!')
  })

  it('renders with `unknown` if no name is given', () => {
    const wrapper = shallow(<Hello />)
    expect(wrapper.find('p').text()).toEqual('Hello, Unknown!')
  })
})
