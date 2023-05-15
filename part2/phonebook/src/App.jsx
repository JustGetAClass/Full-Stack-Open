import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567", id: 1 },
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
      id: persons.length + 1,
    };
    persons.forEach((person) =>
      person.name === newObject.name
        ? alert(`${person.name} is already added to the phonebook`)
        : setPersons(persons.concat(newObject))
    );
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <PersonForm
        submit={handleSubmit}
        name={newName}
        number={newNumber}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons arr={numbersToShow} />
    </div>
  );
};

export default App;
