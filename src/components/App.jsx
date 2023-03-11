import { Component } from 'react';
import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { nanoid } from 'nanoid';

import style from './style.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const unicID = nanoid();

    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, { id: unicID, ...data }],
    });
  };

  changeFilterInput = filter => {
    this.setState({ ...this.state, filter });
  };

  handleDeleteContact = id => {
    let deleteItem = this.state.contacts;
    this.state.contacts.forEach((item, index) => {
      if (item.id === id) {
        deleteItem.splice(index, 1);
      }
    });
    this.setState({ ...this.state, contacts: [...deleteItem] });
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
          <ContactForm
            formSubmitHandler={this.formSubmitHandler}
            contacts={this.state.contacts}
          />
          <Filter changeFilterInput={this.changeFilterInput} />

          <h2 className={style.text}>Contacts</h2>
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        </div>
        {/* <Input /> */}
      </div>
    );
  }
}
