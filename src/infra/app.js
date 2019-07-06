const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

module.exports = app
