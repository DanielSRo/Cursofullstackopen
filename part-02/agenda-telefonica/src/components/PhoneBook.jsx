const Phonebook = ({ person }) => {
    return (
        <div>
            <ul>
                {person.map(info =>
                    <li key={info.id}>name: {info.name} - Number: {info.number}</li>
                )}
            </ul>
        </div>
    )
}

export default Phonebook