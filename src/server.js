const express = require('express')
const cors = require ('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.use('/restaurante', routes)

const port = process.env.PORT||8080
app.listen(port, () => console.log(`Server listening on port ${port}`))
