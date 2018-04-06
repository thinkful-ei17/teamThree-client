import React from 'react';
import {Modal} from './modal';
import {shallow, mount} from 'enzyme';
import './setupTests';

describe('Test Modal Component', () => {
  it('Should smoke test the Modal component', () => {
    shallow(<Modal/>)
  })
})