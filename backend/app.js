const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const todoRoutes = require('./routes')
// connecting database
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })

// creating server
const app = express()

// config middleware
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/api/todos', todoRoutes)

// running server
app.listen(9000, () => console.log('Server is running on port 9000'))