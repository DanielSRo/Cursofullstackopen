import { useEffect } from "react"

const CountryData = ({ countryData, changeName, weather }) => {

    /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
    useEffect(() => {
        countryData.length === 1 ? weather(countryData[0].name.common) : weather('')
    }, [countryData, weather])

    /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
    if (countryData.length === 1) {
        const country = countryData[0]
        const languages = Object.entries(country.languages)
        const flag = country.flags.png

        /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area} m²</p>

                <h3>Languages</h3>
                <ul>
                    {languages.map(([key, value]) => (
                        <li key={key}>{value} ({key})</li>
                    ))}
                </ul>

                <h3>Flag</h3>
                <img src="Flag" alt="Flag" srcSet={flag} />
            </div>
        )
    }

    /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
    return (
        <>
            <ul>
                {countryData.map(n => (
                    <li key={n.ccn3}>
                        {n.name.common}
                        <button onClick={() => changeName(n.name.common)}>Seach</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CountryData