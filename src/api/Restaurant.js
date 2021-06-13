import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 48dC57MLSYlLuvhFB7GlxGpxQoDQV1h_0HwRqLSiUFT65Hby4TdFtiWNN5i01psX6B9dBFh7OjZFf5s10eKxqLJwkcYjvwneRJUWQPQAKJrWibhifQHrf4SfTxIUYHYx'
    }
})