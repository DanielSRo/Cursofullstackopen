import { useEffect, useState } from 'react'

import Directory from './servers/PhoneBook'
import Form from './components/Form'
import PhoneBook from './components/PhoneBook'
import Find from './components/Find'
import Notification from './components/Notification'

const App = () => {

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const request = () => {

    Directory
      .allPerson()
      .then(allPerson => {
        setPersons(allPerson)
      })
  }

  useEffect(request, [])

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFind, setNewFind] = useState('')

  const [notification, setNotification] = useState(null)
  const [typeMessage, setTypeMessage] = useState(true)

  const showPerson = persons.filter(name => name.name.toLowerCase() === newFind.toLowerCase())

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const validatePerson = (event) => {
    event.preventDefault()
    const objPerson = persons.find(n => n.name === newName)

    if (!objPerson) {
      const newPerson = {
        id: (persons.length + 1).toString(),
        name: newName,
        number: newNumber
      }
      addPerson(newPerson)

    } else {
      if (objPerson.number !== newNumber) {
        const confirmation = window.confirm('The person ' + newName + ' is already added to phoneBook, do you want to replace the old number with a new one?')

        if (confirmation) {
          const newPerson = {
            ...objPerson,
            number: newNumber
          }
          updatePerson(newPerson)

        }
      } else {
        alert('Name ' + newName + ' is already added to phonebook')
      }
    }
    setNewName('')
    setNewNumber('')
  }
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const addPerson = (person) => {
    Directory
      .createNewPerson(person)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        styleMessage(
          `${newPerson.name} was successfully added`,
          true
        )

      })
      .catch(error =>
        console.error('Failed to add a new person:', error),
        styleMessage(
          'Failed to add this person failed removal',
          false
        )
      )
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const updatePerson = (person) => {
    Directory
      .updatePerson(person)
      .then(response => {
        setPersons(persons.map(n => n.id !== response.id ? n : response))
        styleMessage(
          `${response.name} was successfully updated`,
          true
        )
      })
      .catch(error =>
        console.error('Failed to update the person:', error),
        styleMessage(
          'Failed to update this person',
          false
        )
      )
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const deletePerson = id => {
    Directory
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(n => n.id !== id))
        styleMessage(
          `${response.name} was successfully eliminated`,
          true
        )
      })
      .catch(error => {
        console.error('Failed to delete the person:', error),
          styleMessage(
            'Failed to delete this person',
            false
          )
      })
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
  const styleMessage = (message, state) => {

    setTypeMessage(state)
    setNotification(message)

    setTimeout(() => {
      setNotification(null)
    }, 4000)
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  return (
    <div>
      <h2>Find Person</h2>
      <Notification notification={notification} typeMessage={typeMessage} />
      <Find newFind={newFind} handleFind={handleFind} showPerson={showPerson} />

      <h2>Add a new</h2>
      <Form
        addPerson={validatePerson}
        handleName={handleName}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber} />

      <h2>PhoneBook</h2>
      <div>
        <ul>
          {persons.map(person =>
            <PhoneBook
              key={person.id}
              person={person}
              deletePerson={() => deletePerson(person.id)} />
          )}
        </ul>
      </div>
    </div>
  )
}

export default App