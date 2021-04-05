import axios from 'axios'

const ApiRecollection = axios.create({
    baseURL:'https://back-end-recollection.herokuapp.com/api/questions/'
})

export default ApiRecollection