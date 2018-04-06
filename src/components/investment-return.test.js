import React from 'react';
import {InvestmentReturn} from './investment-return';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test InvestmentReturn Component', () => {
  it('Should smoke test the InvestmentReturn component', () => {
    shallow(<InvestmentReturn dispatch={jest.fn}/>)
  })
})