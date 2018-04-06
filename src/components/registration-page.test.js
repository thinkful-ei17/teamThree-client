import React from 'react';
import {RegistrationPage} from './registration-page';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Registration Page Component', () => {
  it('Should smoke test the Registration Page component', () => {
    shallow(<RegistrationPage />);
  })
})