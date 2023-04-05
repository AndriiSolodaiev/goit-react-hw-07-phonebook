import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>
        Phonebook <AiFillPhone />
      </h1>
      <Form />
      <h2>
        Contacts <IoMdContacts />
      </h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList />
    </div>
  );
};
