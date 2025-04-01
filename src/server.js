const express = require('express')
const path = require('path')

const routes = require('./routes/routes')

const app = express()

app.use(express)

app.use(express.urlencoded({extended: true}))

app.use('/admin', routes)

const port = process.env.PORT||8080
app.listen(port, () => console.log(`Server listening on port ${port}`))
