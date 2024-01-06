import { useState } from 'react';
import { useSelector } from 'react-redux';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const checkContact = (contacts, newContact) => {
  return contacts.find(
    el => el?.name.toLowerCase() === newContact.name.toLowerCase());
};

export default function ContactsForm({ addContact }) {
  const initState = {
    name: '',
    number: '',
  };
  const [contact, setContact] = useState(initState);
  const { contacts } = useSelector(state => state.contacts);

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkContact(contacts, contact)) {
      alert('error');
      setContact(initState);
      return;
    }

    addContact(contact);
    setContact(initState);
  };

  return (
    <form style={style}
          onSubmit={handleSubmit}
    >
      <label style={style}>
        <span>Contact name</span>
        <input type="text"
               name="name"
               value={contact.name}
               onChange={handleChange}
               required
        />
      </label>
      <label style={style}>
        <span>Contact phone</span>
        <input type="tel"
               name="number"
               value={contact.number}
               onChange={handleChange}
               required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
