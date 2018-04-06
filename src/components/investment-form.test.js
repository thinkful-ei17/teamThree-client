import React from 'react';
import InvestmentForm from './investment-form';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Investment Form Component', () => {
  it('Should smoke test the InvestmentForm component', () => {
    shallow(<InvestmentForm/>)
  });
})