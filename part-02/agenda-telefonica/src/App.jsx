import { useState } from 'react'

import Form from './components/Form'
import PhoneBook from './components/PhoneBook'
import Find from './components/Find'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFind, setNewFind] = useState('')

  const showPerson = persons.filter(name => name.name.toLowerCase() === newFind.toLowerCase())

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.find(name => name.name === newName)) {
      const personObject = { name: newName, number: newNumber, id: persons.length + 1 }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert('Name ' + newName + ' is already added to phonebook')
      setNewName('')
      setNewNumber('')
    }
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFind = (event) => {
    event.preventDefault()
    setNewFind(event.target.value)
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  return (
    <div>
      <h2>Find Person</h2>
      <Find newFind={newFind} handleFind={handleFind} showPerson={showPerson}/>

      <h2>Add a new</h2>
      <Form
        addPerson={addPerson}
        handleName={handleName}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber} />

      <h2>PhoneBook</h2>
      <PhoneBook person={persons} />

    </div>
  )
}

export default App