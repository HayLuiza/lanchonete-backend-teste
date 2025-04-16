const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nomeProduto: String,
  precoProduto: String
})

const ProdutosModel = mongoose.model('produtos', schema)

module.exports = ProdutosModel