import React from 'react';
import {Dashboard} from './dashboard';
import {shallow, mount} from 'enzyme';
import './setupTests';


describe('Test Dashboard Component', () => {
  it('Should smoke test the Dashboard component', () => {
    shallow(<Dashboard />)
  })
})