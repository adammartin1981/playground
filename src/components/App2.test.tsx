import * as React from 'react'
import { App2 } from './App2'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const app2 = shallow(<App2 />)

describe('App2', () => {
  it('should do the snapshot', () => {
    expect(app2).toMatchSnapshot()
  })
})
