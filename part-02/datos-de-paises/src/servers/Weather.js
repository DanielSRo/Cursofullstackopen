import axios from "axios";

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const key = '48b7e42ec270db0b0a7caa78bbdf6fa2'

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const CountryClimate = country => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}&units=metric`

    const climate = axios.get(url)
    return( climate.then(response => {return(response.data)}))
}

export default ({CountryClimate})