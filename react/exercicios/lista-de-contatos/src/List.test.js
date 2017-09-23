import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import List from './List';
import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});

it('renders the props correctly', () => {
  let wrapper = shallow(<List />)
  expect(wrapper.find('li Contact').length).toEqual(2);
});
