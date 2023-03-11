import { Component } from 'react';
import { ContactForm } from './contact-form/ContactForm';
import style from './style.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          color: '#010101',
        }}
      >
        <div>
          <h1 className={style.title}>Phonebook</h1>
          <ContactForm formSubmitHandler={this.formSubmitHandler} />

          <h2 className={style.text}>Contacts</h2>
          {/* <Filter ... /> */}
        </div>
        {/* <ContactList ... /> */}
        {/* <Input /> */}
      </div>
    );
  }
}
