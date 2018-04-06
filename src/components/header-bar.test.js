import React from 'react';
import {HeaderBar} from './header-bar';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test HeaderBar Component', () => {
  it('Should smoke test the HeaderBarcomponent', () => {
    shallow(<HeaderBar />)
  })
})