import { createAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const addContactAction = createAction('contacts/add', (data) => {
  const newContact = {
    ...data,
    id: nanoid(),
  };
  return {
    payload: newContact,
  };
});

export const deleteContactAction = createAction('contacts/delete');

export const searchContactAction = createAction('contacts/search');
