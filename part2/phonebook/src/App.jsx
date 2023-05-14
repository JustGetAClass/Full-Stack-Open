import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    event.target.value.length === 0 ? setShowAll(true) : setShowAll(false);
  };

  const numbersToShow = showAll
    ? persons
    : persons.filter((person) => person.name === search);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };
    persons.forEach((person) =>
      person.name === newObject.name
        ? alert(`${person.name} is already to the phonebook`)
        : setPersons(persons.concat(newObject))
    );
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:&nbsp;{" "}
        <input value={search} onChange={handleSearch} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:&nbsp;
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:&nbsp;
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {numbersToShow.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
