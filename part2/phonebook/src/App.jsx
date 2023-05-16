import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import details from "./services/details";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleEffect = () => {
    details
      .getAll()
      .then((initialData) => {
        setPersons(initialData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(handleEffect, []);

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

    if (persons.filter((p) => p.name === newObject.name).length > 0) {
      if (
        window.confirm(
          `${newObject.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((p) => p.name === newObject.name);
        const changedNumber = { ...person, number: newObject.number };
        details.update(person.id, changedNumber).then((updatededDetails) => {
          setPersons(
            persons.map((p) =>
              p.name === newObject.name ? updatededDetails : p
            )
          );
        });
        setNewName("");
        setNewNumber("");
      }
    } else {
      details
        .create(newObject)
        .then((newData) => {
          setPersons(persons.concat(newData));
        })
        .catch((err) => console.log(err));

      setNewName("");
      setNewNumber("");
    }
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
      <Persons arr={numbersToShow} set={setPersons} />
    </div>
  );
};

export default App;
