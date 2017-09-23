import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});

it('renders the props correctly', () => {
  const div = document.createElement('div');
  let name = 'Nome';
  let telephone = '(11) 1234-5678';
  const expected_output = <span> {name}; {telephone}</span>;
  let component = ReactDOM.render(<Contact />, div);
  expect(component).toContainReact(expected_output);
});
