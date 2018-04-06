import React from 'react';
import Chart from './chart';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Chart Component', () => {
  it('Should smoke test the Chart component', () => {
    shallow(<Chart/>)
  })
})