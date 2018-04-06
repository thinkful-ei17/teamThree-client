import React from 'react';
import {LandingPage} from './landing-page';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Landing Page Component', () => {
  it('Should smoke test the Landing Page component', () => {
    shallow(<LandingPage/>)
  })
})