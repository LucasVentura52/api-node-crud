# API REST Node.js + MySQL com Autenticação JWT

Este projeto é uma API RESTful desenvolvida em **Node.js** conectada a um banco de dados **MySQL** (utilizando XAMPP). A aplicação permite realizar autenticação via **JWT**, além de operações de **CRUD de produtos**, e possui uma interface simples feita em **HTML + JavaScript + Bootstrap 5** para consumo da API.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Runtime JavaScript
- [Express](https://expressjs.com/) - Framework Web para Node.js
- [MySQL](https://www.mysql.com/) - Banco de Dados Relacional
- [XAMPP](https://www.apachefriends.org/) - Ambiente local com servidor MySQL
- [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) - Autenticação com token
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Criptografia de senha
- [dotenv](https://www.npmjs.com/package/dotenv) - Gerenciamento de variáveis de ambiente
- [Bootstrap 5](https://getbootstrap.com/) - Frontend responsivo e elegante
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) - Requisições HTTP no frontend

---

## 📁 Estrutura do Projeto

```
api-node-mysql/
│
├── config/
│   └── db.js               → Conexão com banco MySQL
│
├── controllers/
│   ├── authController.js   → Login e Registro de Usuário
│   └── produtoController.js→ CRUD de produtos
│
├── middlewares/
│   └── authMiddleware.js   → Validação de JWT
│
├── routes/
│   ├── authRoutes.js       → Rotas de autenticação
│   └── produtoRoutes.js    → Rotas de produtos
│
├── public/
│   └── index.html          → Interface frontend simples (CRUD + Login)
│
├── .env                    → Variáveis de ambiente
├── app.js                  → Arquivo principal
├── package.json            → Dependências e scripts
└── README.md               → Documentação
```

---

## 🔧 Instalação e Execução

### ✅ Pré-requisitos:
- Node.js instalado
- XAMPP rodando com MySQL ativo

### 🚀 Passos:

1. Clone este repositório ou extraia o ZIP na sua pasta de projetos:
   ```
   cd /Applications/XAMPP/htdocs/  # Ou sua pasta preferida
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure o arquivo `.env` na raiz do projeto:
   ```
   JWT_SECRET=seuSegredoAqui
   ```

4. Crie o banco de dados no MySQL usando o phpMyAdmin ou terminal:
   ```sql
   CREATE DATABASE apinode;

   USE apinode;

   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(100) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL
   );

   CREATE TABLE produtos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(100) NOT NULL,
       preco DECIMAL(10,2) NOT NULL,
       descricao VARCHAR(255)
   );
   ```

5. Cadastre um usuário via rota `/api/auth/register` ou direto pelo banco (criptografando a senha corretamente).

6. Inicie o servidor:
   ```
   npm start
   ```

7. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 🔐 Autenticação

- Login via **JWT**.  
- Após o login, é retornado um token que deve ser enviado no cabeçalho `Authorization` nas requisições protegidas.

---

## 🔗 Rotas da API

| Método | Rota                       | Descrição            | Protegida |
|--------|-----------------------------|----------------------|-----------|
| POST   | /api/auth/login             | Login                | ❌        |
| POST   | /api/auth/register          | Registrar usuário    | ❌        |
| GET    | /api/produtos               | Listar produtos      | ✅        |
| POST   | /api/produtos               | Criar produto        | ✅        |
| PUT    | /api/produtos/:id           | Atualizar produto    | ✅        |
| DELETE | /api/produtos/:id           | Deletar produto      | ✅        |

---

## 🌐 Frontend (Interface Simples)

- Tela HTML com Bootstrap acessível em `/public/index.html`
- Funcionalidades:
  - Login
  - Cadastro e edição de produtos
  - Listagem de produtos
  - Exclusão de produtos

---

## 🔒 Segurança Implementada

- ✔️ Autenticação via **JWT**
- ✔️ Senhas criptografadas com **bcrypt**
- ✔️ Middleware de validação de token em rotas protegidas
- ✔️ Expiração de token configurada (1 hora)

---

## 👨‍💻 Autor

**Lucas Ventura**  
Projeto de exemplo para fins acadêmicos e práticos com Node.js + MySQL

---