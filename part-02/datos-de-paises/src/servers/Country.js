import axios from "axios";

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const allCountry = () => {
    const request = axios.get(url)
    return(request.then(response =>{return(response.data)}))
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
export default {allCountry}