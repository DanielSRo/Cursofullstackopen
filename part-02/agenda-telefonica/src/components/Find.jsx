const Find = ({ newFind, handleFind, showPerson }) => {
    return (
        <>
            <div>
                find <input
                    value={newFind}
                    onChange={handleFind}
                />
            </div>
            <ul>
                {showPerson.map(info =>
                    <li key={info.id}>name: {info.name} - Number: {info.number}</li>
                )}
            </ul>
        </>
    )
}

export default Find