import { App } from './App'
import * as React from 'react'

import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App', () => {
  const app = shallow(<App />)
  it('should sort the App Component', () => {
    expect(shallow(<App />).is('.foo')).toBe(true)
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
})
