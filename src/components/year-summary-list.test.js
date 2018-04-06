import React from 'react';
import {YearSummaryList} from './year-summary-list';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Year Summary List Component', () => {
  it('Should smoke test the Year Summary List component', () => {
    let year = [{
      x: 'high',
      previousYear: 5000,
      y: 1
    }];
    
    shallow(<YearSummaryList years={year}/>)
  })
})