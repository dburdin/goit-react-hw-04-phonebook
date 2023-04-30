import { List, DeleteButton, ListItem } from './ContactList.styled';

import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <DeleteButton
              onClick={() => {
                handleDeleteContact(id);
              }}
              type="button"
            >
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
