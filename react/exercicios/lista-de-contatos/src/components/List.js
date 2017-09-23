import React, { Component } from 'react';
import Contact from './Contact.js';
// import './App.css';

function List(props) {
  let contactList = [
    { name: 'Codus Tecnologia', telephone: '(11) 3262-4797' },
    { name: 'Teste', telephone: '(11) 1111-1111' }
  ]

  let contacts = contactList.map((contact, index) =>
    <li key={index}> <Contact name={contact.name} telephone={contact.telephone}/> </li>
  );
  return <ul> {contacts} </ul>

}

export default List;
