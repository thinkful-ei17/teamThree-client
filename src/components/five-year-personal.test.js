import React from 'react';
import {FiveYearPersonal} from './five-year-personal';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test FiveYearPersonal Component', () => {
  it('Should smoke test the FiveYearPersonal component', () => {
    shallow(<FiveYearPersonal/>)
  })
})