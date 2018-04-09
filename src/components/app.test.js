import React from 'react';
import {App} from './app';
import {shallow, mount} from 'enzyme';
import './setupTests';
import {spy} from 'sinon';
import {assert} from 'chai';


describe('Test App Component', () => {
  it('Should smoke test the App component', () => {
    shallow(<App dispatch={jest.fn}/>)
  });
  // it('Should test App componentDidMount', async () => {
  //   const componentDidMountSpy = spy(Container.prototype, 'componentDidMount');
  //   const wrapper = mount(<App/>)
  //   assert.ok(Container.prototype.componentDidMount.calledOnce);
  //   componentDidMountSpy.restore();
  // })
})