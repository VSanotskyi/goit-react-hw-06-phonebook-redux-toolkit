export default function ContactsSearchForm({ searchContact, filter }) {
  return (
    <div>
      <h3>Search contact</h3>
      <input
        type="text"
        value={filter}
        onChange={({ target: { value } }) => searchContact(value)}
      />
    </div>
  );
}
