export default function ContactsItem({ contact, deleteContact }) {
  const { name, number, id } = contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => deleteContact(id)}
      >
        delete
      </button>
    </li>
  );
}
