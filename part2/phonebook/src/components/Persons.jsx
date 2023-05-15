const Persons = ({ arr }) => {
  return (
    <div>
      {arr.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
