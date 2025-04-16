# 🍟 Lanchonete API + Painel Admin 
Este projeto foi desenvolvido como um desafio técnico com o objetivo de criar uma API RESTful para gerenciar pedidos de uma lanchonete, além de oferecer um painel administrativo para o cadastro de produtos e gestão dos pedidos.

## Sobre o projeto
A proposta consiste em construir um sistema completo com três módulos principais:

- Clientes: `cadastro de nome`, `email`, `telefone` e `endereço`;

- Produtos: `nome` e `preço`;

- Pedidos: `código do cliente`, `código do produto`, `data de criação` e `status do pedido`.

A aplicação conta com:

- ✅ API funcional com rotas REST
- ✅ Validação de dados no backend
- ✅ Relacionamento entre Cliente, Produto e Pedido
- ✅ Painel administrativo com autenticação simples
- ✅ Interface para gerenciamento dos pedidos com atualização de status em tempo real

## ⚙️ Tecnologias utilizadas
- `Node.js`

- `Express`

- `MongoDB + Mongoose`

- `HTML/CSS/JS` puro no front-end

- `Fetch API` para chamadas à API

## 🔗 Estrutura das rotas

### 👤 Clientes
- POST /clientes → Cadastra um cliente (valida email/telefone únicos)

- GET /clientes → Lista os clientes

- GET /clientes/:id → Detalhes de um cliente específico

- PUT /clientes/:id → Atualiza dados de um cliente

- DELETE /clientes/:id → Remove um cliente

### 📦 Produtos
- GET /produtos → Lista todos os produtos

- POST /produtos → Cria um novo produto

- PUT /produtos/:id → Atualiza um produto

- DELETE /produtos/:id → Remove um produto
  
### 🧾 Pedidos
- POST /pedidos → Cria um novo pedido com múltiplos produtos

- GET /pedidos → Lista todos os pedidos ou filtra por cliente (?codCliente=id)

- PUT /pedidos/:id → Atualiza status do pedido

- DELETE /pedidos/:id → Remove um pedido (somente se for do cliente dono)

## Regras 
Não pode haver dois clientes com o mesmo email ou telefone.

Um cliente só pode editar ou excluir seus próprios pedidos.

O status dos pedidos pode ser alterado apenas via painel admin.

Os status disponíveis são:

- `Pendente`

- `Em preparo`

- `Em entrega`

- `Entregue`

- `Cancelado`

## 👩‍💻 Painel Admin
A interface de administração permite:

- Cadastrar, listar, editar e excluir produtos.

- Visualizar todos os pedidos.

- Alterar o status de cada pedido.

- Ver os nomes dos produtos e o endereço do cliente.

## 🔐 Autenticação
Para acessar o painel admin, é necessário realizar login com usuário e senha simples (Nome e senha qualquer, apenas para teste).

## 🤝 Contribuição
Esse projeto foi feito com carinho e dedicação como parte de um desafio técnico. Caso queira contribuir, melhorar ou adaptar, fique à vontade! 💬

## 📬 Contato
- Feito por Hayra Luiza
- 📧 hlhabade@gmail.com
- 💼 www.linkedin.com/in/hayra-luiza
- 📚 Curso: Formação Full Stack JavaScript - Hotmart (Thiago Medeiros)
- 🌐 Teste Fictício Vaga de Emprego - API RESTFull
