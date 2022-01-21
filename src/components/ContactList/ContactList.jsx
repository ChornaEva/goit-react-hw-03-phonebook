import React from "react";
import PropTypes from "prop-types";
import {
  UsersContactList,
  ContactListItem,
  UserName,
  UserNumber,
  ContactListButton,
} from "./ContactList.styled";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <UsersContactList>
        {contacts?.map((contact) => (
          <ContactListItem key={contact.id}>
            <UserName>{contact.name}</UserName>
            <UserNumber>{contact.number}</UserNumber>
            <ContactListButton onClick={() => deleteContact(contact.id)}>
              {" "}
              Delete
            </ContactListButton>
          </ContactListItem>
        ))}
      </UsersContactList>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};

export default ContactList;
