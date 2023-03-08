import { List, ListItem } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
