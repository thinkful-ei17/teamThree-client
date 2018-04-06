import React from 'react';
import RiskDetail from './risk-detail';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Risk Detail Component', () => {
  it('Should smoke test the Risk Detail component', () => {
    shallow(<RiskDetail/>)
  })
})