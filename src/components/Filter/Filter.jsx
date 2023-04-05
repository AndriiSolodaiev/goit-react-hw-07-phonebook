import { Label, Input } from 'components/Form/Form.styled';
import { FaFilter } from 'react-icons/fa';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const onChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  return (
    <Label>
      Find contacts by name <FaFilter />
      <Input type="text" onChange={onChange} />
    </Label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
