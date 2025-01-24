const Phonebook = ({ person, deletePerson }) => {
    return (
        <>
            <li>
                name: {person.name} - Number: {person.number}
                <button onClick={deletePerson}>Delete</button>
            </li>
        </>
    )
}

export default Phonebook