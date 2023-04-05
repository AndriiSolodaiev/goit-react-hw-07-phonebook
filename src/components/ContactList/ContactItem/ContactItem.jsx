import { Li, DeleteButton } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <Li>
      {contact.name}: {contact.number}
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </DeleteButton>
    </Li>
  );
}
