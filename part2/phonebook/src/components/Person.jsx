/* eslint-disable react/prop-types */
import details from "../services/details";

const Person = ({ person, refresh }) => {
  const handleDelete = () => {
    details.deleteItem(person.id);
    details.getAll().then((data) => refresh(data));
  };

  return (
    <div key={person.id}>
      {person.name} {person.number}{" "}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Person;
