import { configureStore } from '@reduxjs/toolkit';
import { contactsToolkit } from './contacts/contactsToolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsToolkit,
  },
});
