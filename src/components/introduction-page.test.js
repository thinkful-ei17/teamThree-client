import React from 'react';
import IntroductionPage from './introduction-page';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Introduction Page Component', () => {
  it('Should smoke test the IntroductionPage component', () => {
    shallow(<IntroductionPage/>)
  })
  it('Should test Introduction Page call componentDidMount', () => {
    const wrapper = shallow( < IntroductionPage/>);
    expect(componentDidMount).to.equal(1);
    wrapper.unmount();
  })
})