const router = require('express').Router()

const ClienteController = require('../controllers/cliente')
const ProdutoController = require('../controllers/produto')
const PedidoController = require('../controllers/pedido')

// CLIENTE
router.post('/clientes/login', ClienteController.login)
router.get('/clientes', ClienteController.get)
router.post('/clientes', ClienteController.post)
router.get('/clientes/:id', ClienteController.getById)
router.put('/clientes/:id', ClienteController.put)
router.delete('/clientes/:id', ClienteController.remove)


//PRODUTO
router.get('/produtos', ProdutoController.get)
router.get('/produtos/:id', ProdutoController.getById)
router.post('/produtos', ProdutoController.post)
router.put('/produtos/:id', ProdutoController.put)
router.delete('/produtos/:id', ProdutoController.remove)


//PEDIDO
router.get('/pedidos', PedidoController.get)
router.post('/pedidos', PedidoController.post)
router.put('/pedidos/:id', PedidoController.put)
router.delete('/pedidos/:id', PedidoController.remove)

module.exports = router