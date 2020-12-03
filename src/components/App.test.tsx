import { App } from './App'
import * as React from 'react'

import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { fireEvent, render, screen } from '@testing-library/react'

configure({ adapter: new Adapter() })

describe('App', () => {
  const app = shallow(<App />)
  it('should sort the App Component', () => {
    expect(shallow(<App />).is('.app')).toBe(true)
  })

  it('should do snapshots', () => {
    expect(app).toMatchSnapshot()
  })

  it('should do wallaby snapshot', () => {
    const app2 = shallow(<App />)
    const app3 = shallow(<App />)

    expect(app2).toMatchSnapshot()
    expect(app3).toMatchSnapshot()
  })

  it('has no gifts when it starts', () => {
    render(<App />)

    // Need to add a gift by using the elements inside the app

    expect(screen.queryAllByTestId('gift')).toHaveLength(0)
  })

  it('adds a gift when filled in', () => {
    render(<App />)

    screen.getByTestId('addGift').click()

    expect(screen.queryAllByTestId('gift')).toHaveLength(1)
  })

  it('adds more than one gift', () => {
    render(<App />)

    const addGiftButton = screen.queryAllByTestId('addGift')

    screen.getByTestId('addGift').click()
    screen.getByTestId('addGift').click()

    expect(screen.queryAllByTestId('gift')).toHaveLength(2)
  })
})
