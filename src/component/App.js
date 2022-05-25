import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const [contact, setContact] = useState([]);

  const contacts = [
    {
      id: 1,
      name: 'Shahmir',
      email: 'Shehmirk@gmail.com'
    },
    {
      id: 2,
      name: 'Huzefa',
      email: 'huzefa@gmail.com'
    },
    {
      id: 3,
      name: 'Mustafa',
      email: 'mustafa@gmail.com'
    }
  ]

  return (
    <div className="container mx-auto">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
