import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList/';
import { Filter } from 'components/Filter';

import { Wrapper } from './PhoneBook.styled';

const LS_KEY = 'contacts';

export const PhoneBook = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (values, { resetForm }) => {
    const normilizedName = values.name.toLowerCase();
    const similarName = contacts.filter(
      contact => contact.name.toLowerCase() === normilizedName
    );
    if (similarName.length > 0) {
      return alert(`${similarName[0].name} is already in contacts!`);
    }

    setContacts(prev => [
      ...prev,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
    resetForm();
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterField = e => setFilter(e.target.value);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterField={handleFilterField} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </Wrapper>
  );
};
// export class PhoneBook extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmit = (values, { resetForm }) => {
//     const normilizedName = values.name.toLowerCase();
//     const similarName = this.state.contacts.filter(
//       contact => contact.name.toLowerCase() === normilizedName
//     );
//     if (similarName.length > 0) {
//       return alert(`${similarName[0].name} is already in contacts!`);
//     }
//     this.setState({
//       contacts: [...this.state.contacts, { id: nanoid(), ...values }],
//     });
//     resetForm();
//   };

//   handleDeleteContact = id => {
//     this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== id),
//     });
//   };
//   handleFilterField = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <Wrapper>
//         <h1>Phonebook</h1>
//         <ContactForm handleSubmit={this.handleSubmit} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} handleFilterField={this.handleFilterField} />
//         <ContactList
//           contacts={visibleContacts}
//           handleDeleteContact={this.handleDeleteContact}
//         />
//       </Wrapper>
//     );
//   }
// }
