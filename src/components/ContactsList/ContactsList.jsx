import { useDispatch, useSelector } from 'react-redux';

import {
  addContactAction,
  deleteContactAction,
  searchContactAction,
} from '../../store/contacts/action';
import ContactsItem from '../ContactsItem/ContactsItem';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsSearchForm from '../ContactsSearchForm/ContactsSearchForm';

export const LOCALSTORAGE_KEY = 'contacts';
const updateLocalStorage = (contacts) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
};

const filterContacts = (contacts, search) => {
  return contacts.length > 0 && search
    ? contacts.filter(
      el => el.name.toLowerCase().includes(search.toLowerCase()))
    : contacts;
};

export default function ContactsList() {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  updateLocalStorage(contacts);

  const addContact = (data) => {
    dispatch(addContactAction(data));
  };

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  const searchContact = (search) => {
    dispatch(searchContactAction(search));
  };

  const contactsListForRender = filterContacts(contacts, filter);

  return (
    <div>
      <ContactsForm
        addContact={addContact}
      />
      {
        contacts.length > 0 && (
          <>
            <ContactsSearchForm
              searchContact={searchContact}
              filter={filter}
            />
            <h2>Contacts</h2>
            <ul>
              {contactsListForRender.map((el) => (
                <ContactsItem key={el.id}
                              contact={el}
                              deleteContact={deleteContact}
                />),
              )
              }
            </ul>
          </>
        )
      }
    </div>
  );
}


