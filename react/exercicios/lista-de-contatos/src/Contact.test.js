import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});

it('renders the props correctly', () => {
  let name = 'Nome';
  let telephone = '(11) 1234-5678';
  let component = shallow(<Contact name={name} telephone={telephone} />)
  expect(component.contains(name)).toEqual(true);
  expect(component.contains(`; `)).toEqual(true);
  expect(component.contains(telephone)).toEqual(true);
});
