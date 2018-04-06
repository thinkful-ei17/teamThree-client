import React from 'react';
import RequiresLogin from './requires-login';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Requires Login Component', () => {
  it('Should smoke test the Requires Login component', () => {
    shallow(<RequiresLogin/>)
  })
})