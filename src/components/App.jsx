import { Component } from 'react';
import { ContactForm } from './contact-form/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          {/* <Filter ... /> */}
          {/* <ContactList ... /> */}
        </div>
        {/* <Input /> */}
      </div>
    );
  }
}
