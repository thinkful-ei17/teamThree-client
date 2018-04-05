import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test App Component', () => {
  it('Should smoke test the App component', () => {
    shallow(<App />)
  });
  it('Should test App state renders', () => {
    const wrapper = shallow( < App />);
    expect(componentDidMount).to.equal(1);
    wrapper.unmount();
  })
})