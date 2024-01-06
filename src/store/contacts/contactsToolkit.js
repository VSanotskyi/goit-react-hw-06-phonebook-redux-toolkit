import { createReducer } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  searchContactAction,
} from './action';
import { LOCALSTORAGE_KEY } from '../../components/ContactsList/ContactsList';

const contactsFromLocalStorage = JSON.parse(
  localStorage.getItem(LOCALSTORAGE_KEY));

const initState = {
  contacts: contactsFromLocalStorage ? contactsFromLocalStorage : [],
  filter: '',
};

export const contactsToolkit = createReducer(initState, (builder) => {
  builder
    .addCase(addContactAction, (state, { payload }) => {
      state.contacts.push(payload);
    })
    .addCase(deleteContactAction, (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    })
    .addCase(searchContactAction, (state, { payload }) => {
      state.filter = payload;
    });
});
