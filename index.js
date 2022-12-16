// require packages
const express = require('express')
const axios = require('axios')
// gives us access to our .env variables
require('dotenv').config()

// express config
const app = express()
const PORT = 3000
const API_KEY = process.env.API_KEY

// route
app.get('/', async (req,res) => {
    // async the route to use the await keyword in it 
//     const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&t=star+wars`
//     console.log(baseUrl)
//     axios.get(baseUrl)
//         .then(response => {
//             // you nee to go into the response.data, that is where axios puts the API's response to use
//             res.json(response.data)
//         })
//         .catch(error => {
//             // console.log the specitics of the error, but keep them private
//             console.log('🔥', error)
//             // generic internal error code, message to the client that something bad happened
//             res.status(500).send('internal server error')
//         })

try {
    const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&t=star+wars`
    console.log(baseUrl)
    const response = await axios.get(baseUrl)
    res.json(response.data)
    

} catch (error) {
    console.log('🔥', error)
}

})

// listening on port
app.listen(PORT, () => 
console.log(`listening on port ${PORT}`))