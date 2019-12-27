import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName ] = useState('') //The newName state is meant for controlling the form input element.

  const rows = () => persons.map(person =>
    <li key={person.name}>{person.name}</li>
    ) 

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    persons.forEach(x => {
      if (x.name === newName) { 
        alert(`${newName} is already added to phonebook`)
      }
      else {
        setPersons(persons.concat(personObject))
        setNewName('')
      }
    })
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul> {rows()} </ul>
    </div>
  )
}

export default App;

/*Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:

<div>debug: {newName}</div>*/