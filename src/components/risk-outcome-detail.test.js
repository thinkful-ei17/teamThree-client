import React from 'react';
import RiskOutcomeDetail from './risk-outcome-detail';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Risk Outcome Detail Component', () => {
  it('Should smoke test the Risk Outcome Detail component', () => {
    shallow(<RiskOutcomeDetail/>)
  })
})