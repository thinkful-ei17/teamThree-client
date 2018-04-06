import React from 'react';
import Splash from './splash';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Splash Component', () => {
  it('Should smoke test the Splash component', () => {
    shallow(<Splash/>)
  })
})