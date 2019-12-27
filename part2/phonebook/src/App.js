import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName ] = useState('') //The newName state is meant for controlling the form input element.
  const [newNumber, setNewNumber] = useState('')
  const [filteredList, setFilter] = useState('')
    
 const namesToShow = persons.filter(el =>
  el.name.toLowerCase().startsWith(filteredList.toLowerCase()))

  const rows = () => namesToShow.map(person =>
    <li key={person.name}>{person.name} {person.number}</li>
    ) 

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.forEach(x => {
      if (x.name === newName) { 
        alert(`${newName} is already added to phonebook`)
      }
      else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    })
  }

  //эти хэндлеры чтобы записать то, что вводят в форму в новое состояние 
  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filteredList} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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