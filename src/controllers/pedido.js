const PedidosModel = require('../models/pedidos')

async function get(req, res) {
  try {
    const { id, codCliente } = req.query;

    let filtro = {};
    if (id) filtro._id = id;
    if (codCliente) filtro.codCliente = codCliente;

    const pedidos = await PedidosModel.find(filtro);
    res.send(pedidos);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).send({ error: 'Erro ao buscar pedidos.' });
  }
}

async function post (req, res) {
  const {
    codCliente,
    codProduto,
    dataCriacao,
    statusPedido
  } = req.body

  const pedido = new PedidosModel ({
    codCliente,
    codProduto,
    dataCriacao,
    statusPedido
  })

  await pedido.save()

  res.send({
    message: 'success'
  })
}

async function put (req, res) {
  const { id } = req.params

  const pedido = await PedidosModel.findOneAndUpdate({ _id: id }, req.body, { new: true } )

  res.send({
    message: 'success',
    pedido,
  })
}

async function remove (req, res) {

  const { id } = req.params

  const result = await PedidosModel.deleteOne({ _id: id })

  const message = result.deletedCount > 0 ? 'success' : 'error'

  res.send({
    message,
  })
}

module.exports = {
  get,
  post,
  put,
  remove,
}
