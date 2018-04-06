import React from 'react';
import {RegistrationForm} from './registration-form';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Registration Form Component', () => {
  it('Should smoke test the Registration Form component', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={handleSubmit}/>);
    wrapper.simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  })
})