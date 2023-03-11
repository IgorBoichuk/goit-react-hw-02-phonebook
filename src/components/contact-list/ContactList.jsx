export const ContactList = ({ contacts }) => {
  const newContactList = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}:{number}
      </li>
    );
  });
  return <ul>{newContactList}</ul>;
  //   console.log(contacts);
};
