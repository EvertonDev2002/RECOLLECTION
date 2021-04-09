import axios from 'axios'
import rateLimit from 'axios-rate-limit'

const http = rateLimit(axios.create(
    {
        baseURL:'https://back-end-recollection.herokuapp.com' 
    }
), { maxRequests: 1, perMilliseconds: 3600000000000000000, maxRPS: 0 })


export default http