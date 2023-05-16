/* eslint-disable react/prop-types */
import Person from "./Person";

const Persons = ({ arr, set }) => {
  return (
    <div>
      {arr.map((person) => (
        <Person key={person.id} person={person} refresh={set}/>
      ))}
    </div>
  );
};

export default Persons;
