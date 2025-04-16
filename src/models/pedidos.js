const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  codCliente: {
    type: String,
    required: true
  },
  codProduto: {
    type: [String],
    required: true
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  statusPedido: {
    type: String,
    default: 'Pendente'
  }
})

const PedidosModel = mongoose.model('pedidos', schema)

module.exports = PedidosModel