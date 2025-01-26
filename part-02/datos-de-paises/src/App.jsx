import { useEffect, useState } from "react"

import Country from "./servers/Country"
import Weather from "./servers/Weather"

import CountryData from "./components/CountryData"
import WeatherData from "./components/WeatherData"



const App = () => {
  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const [countryName, setCountryName] = useState('')
  const [weather, setWeather] = useState('')

  const [allCountry, setAllCountry] = useState([])
  const [countryData, setCountryData] = useState([])
  const [weatherData, setWeatherData] = useState([])

  const [messageError, setMessageError] = useState(null)

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  useEffect(() => {
    Country
      .allCountry()
      .then(response => {
        setAllCountry(response)
      })
  }, [])

  useEffect(() => {
    if (countryName) {
      const countries = allCountry.filter(country =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
      )
      validateCountry(countries)
    }
  }, [countryName])

  useEffect(() => {
    if (weather) {
      Weather
        .CountryClimate(weather)
        .then(response => {
          setWeatherData(response)
        })
    } else {
      setWeatherData([])
    }
  }, [weather])

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const validateCountry = countries => {
    if (countries.length <= 10) {
      setCountryData(countries)
      setMessageError(null)
    } else {
      setCountryData([])
      setMessageError('too many country, specify your search')
      setTimeout(() => {
        setMessageError(null)
        setWeather('')
      }, 1000)
    }
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  const handleCountry = (event) => {
    setCountryName(event.target.value)
  }

  /* *** *** *** *** *** *** *** *** *** *** *** *** *** */
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <h1>Country Data</h1>
        country: <input value={countryName} onChange={handleCountry} />
      </form>
      <p>{messageError}</p>
      <CountryData
        countryData={countryData}
        changeName={setCountryName}
        weather={setWeather}
      />
      <WeatherData data={weatherData} />
    </div>
  )
}

export default App