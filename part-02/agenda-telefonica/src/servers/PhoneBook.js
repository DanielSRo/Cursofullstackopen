import axios from "axios";

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const url = 'http://localhost:3001/persons'

/* *** *** *** *** *** *** *** *** *** *** *** *** *** */
const allPerson = () => {
    const AllPerson = axios.get(url)
    return(AllPerson.then(response => {return(response.data)}))
}

const createNewPerson = ObjPerson => {
    const createPerson = axios.post(url, ObjPerson)
    return(createPerson.then(response => response.data))
}

const deletePerson = id =>{
    const deletePerson = axios.delete(url+'/'+id)
    return(deletePerson.then(reponse => reponse.data))
}

const updatePerson = (ObjPerson) => {
    const updatePerson = axios.put(url+'/'+ObjPerson.id, ObjPerson)
    return(updatePerson.then(reponse => reponse.data))
}



export default {allPerson, createNewPerson, deletePerson, updatePerson}
