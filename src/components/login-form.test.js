import React from 'react';
import {LoginForm} from './login-form';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Login Form Component', () => {
  it('Should smoke test the Login Form component', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit}/>);
    wrapper.simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  })
})