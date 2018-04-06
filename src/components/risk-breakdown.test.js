import React from 'react';
import {RiskBreakdown} from './risk-breakdown';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Risk Breakdown Component', () => {
  it('Should smoke test the Risk Breakdown component', () => {
    shallow(<RiskBreakdown/>)
  })
})