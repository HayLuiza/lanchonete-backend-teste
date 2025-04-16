const ClientesModel = require('../models/clientes')
const { crypto, compare } = require('../utils/password')

async function get (req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null 

  const clientes = await ClientesModel.find(obj)

  res.send(clientes)
}

async function post (req, res) {
  const {
    name,
    email,
    telefone,
    endereco,
    password,
  } = req.body

  const existingClientEmail = await ClientesModel.findOne({
    $or: [{ email }]
  })

  if (existingClientEmail) {
    return res.send({
      message: 'email_existente'
    })
  }

  const existingClientTelefone = await ClientesModel.findOne({
    $or: [{ telefone }]
  })

  if (existingClientTelefone) {
    return res.send({
      message: 'telefone_existente'
    })
  }
  
  const passwordCrypto = await crypto(password)

  const cliente = new ClientesModel ({
    name,
    email,
    telefone,
    endereco,
    password: passwordCrypto,
  })

  await cliente.save()

  res.send({
    message: 'success'
  })
}

async function put (req, res) {
  const { id } = req.params

  const cliente = await ClientesModel.findOneAndUpdate({ _id: id }, req.body, { new: true } )

  res.send({
    message: 'success',
    cliente,
  })
}

async function remove (req, res) {

  const { id } = req.params

  const result = await ClientesModel.deleteOne({ _id: id })

  const message = result.deletedCount > 0 ? 'success' : 'error'

  res.send({
    message,
  })
}

async function login (req, res) {
  const { 
    email,
    password 
  } = req.body

  const cliente = await ClientesModel.findOne({ email })

  if (!cliente) {
    return res.status(401).send({ message: 'Email e/ou senha incorretos' })
  }

  const isValid = await compare(password, cliente.password)

  if (!isValid) {
    return res.status(401).send({ message: 'Email e/ou senha incorretos' })
  }

  res.send({ 
    message: 'success',
    _id: cliente._id,
    name: cliente.name,
    email: cliente.email
  })
}

async function getById(req, res) {
  const { id } = req.params
  const cliente = await ClientesModel.findById(id)

  if (!cliente) {
    return res.status(404).send({ message: 'Cliente não encontrado' })
  }

  res.send(cliente)
}

module.exports = {
  get,
  post,
  put,
  remove,
  login,
  getById,
}
