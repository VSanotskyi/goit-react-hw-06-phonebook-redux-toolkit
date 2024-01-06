import { Provider } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import { store } from '../store/store';

export default function App() {
  return (
    <Provider store={store}>
      <ContactsList />
    </Provider>
  );
}
