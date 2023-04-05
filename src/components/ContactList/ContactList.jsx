// import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   removeContact: PropTypes.func.isRequired,
// };
