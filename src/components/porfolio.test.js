import React from 'react';
import {Portfolio} from './portfolio';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Portfolio Component', () => {
  it('Should smoke test the Portfolio component', () => {
    shallow(<Portfolio dispatch={jest.fn}/>)
  })
})