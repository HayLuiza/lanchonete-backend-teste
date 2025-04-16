const ProdutosModel = require('../models/produtos')

async function get (req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null 

  const produtos = await ProdutosModel.find(obj)

  res.send(produtos)
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const produto = await ProdutosModel.findById(id);

    if (!produto) {
      return res.status(404).send({ error: 'Produto não encontrado' });
    }

    res.send(produto);
  } catch (error) {
    console.error('Erro ao buscar produto por ID:', error);
    res.status(500).send({ error: 'Erro ao buscar produto por ID.' });
  }
}

async function post (req, res) {
  const {
    nomeProduto,
    precoProduto,
  } = req.body

  const produto = new ProdutosModel ({
    nomeProduto,
    precoProduto,
  })

  await produto.save()

  res.send({
    message: 'success'
  })
}

async function put (req, res) {
  const { id } = req.params

  const produto = await ProdutosModel.findOneAndUpdate({ _id: id }, req.body, { new: true } )

  res.send({
    message: 'success',
    produto,
  })
}

async function remove (req, res) {

  const { id } = req.params

  const result = await ProdutosModel.deleteOne({ _id: id })

  const message = result.deletedCount > 0 ? 'success' : 'error'

  res.send({
    message,
  })
}

module.exports = {
  get,
  getById,
  post,
  put,
  remove,
}