import { Component } from 'react';

import style from '../style.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={style.wrapper}>
        <form action="" className={style.form}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={style.forminput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number" className={style.label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            className={style.forminput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="button" name="addButton" className={style.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
