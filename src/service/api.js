import axios from 'axios'
import rateLimit from 'axios-rate-limit'

const http = rateLimit(axios.create(
    {
        baseURL:'https://back-end-recollection.herokuapp.com/recollection' 
    }
), {
     maxRequests: 1,
     perMilliseconds: 200,
     maxRPS: 0, 
    })

export default http