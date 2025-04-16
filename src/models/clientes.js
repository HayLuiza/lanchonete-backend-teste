const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  email: String,
  telefone: String,
  endereco: String,
  password: String
})

const ClientesModel = mongoose.model('clientes', schema)

module.exports = ClientesModel