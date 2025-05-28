# API REST Node.js + MySQL com Autenticação JWT

Este projeto é uma API RESTful desenvolvida em **Node.js** conectada a um banco de dados **MySQL** (utilizando XAMPP). A aplicação permite realizar autenticação via **JWT**, além de operações de **CRUD de produtos**, e possui uma interface simples feita em **HTML + JavaScript + Bootstrap 5** para consumo da API.

Além disso, o frontend possui um sistema de **bloqueio de tentativas de login após 3 erros**, garantindo uma camada adicional de segurança.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) – Runtime JavaScript
- [Express](https://expressjs.com/) – Framework Web para Node.js
- [MySQL](https://www.mysql.com/) – Banco de Dados Relacional
- [XAMPP](https://www.apachefriends.org/) – Ambiente local com servidor MySQL
- [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) – Autenticação com token
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – Criptografia de senha
- [dotenv](https://www.npmjs.com/package/dotenv) – Gerenciamento de variáveis de ambiente
- [Bootstrap 5](https://getbootstrap.com/) – Frontend responsivo e elegante
- [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) – Requisições HTTP no frontend

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
│   ├── assets/
│   │   └── css/            → Arquivos CSS (index.css, login.css)
│   ├── index.html          → Interface CRUD de produtos
│   └── login.html          → Interface de login e cadastro
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

   ```bash
   cd /Applications/XAMPP/htdocs/  # Ou sua pasta preferida
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo `.env` na raiz do projeto:

   ```bash
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

   ```bash
   npm start
   ```

7. Acesse no navegador:
   ```plaintext
   http://localhost:3000/login.html   → Tela de login
   http://localhost:3000/index.html   → Tela CRUD de produtos
   ```

---

## 🔐 Autenticação

- Login via **JWT**.
- Após o login, é retornado um token que deve ser enviado no cabeçalho `Authorization` nas requisições protegidas.

---

## 🔗 Rotas da API

| Método | Rota               | Descrição         | Protegida |
| ------ | ------------------ | ----------------- | --------- |
| POST   | /api/auth/login    | Login             | ❌        |
| POST   | /api/auth/register | Registrar usuário | ❌        |
| GET    | /api/produtos      | Listar produtos   | ✅        |
| POST   | /api/produtos      | Criar produto     | ✅        |
| PUT    | /api/produtos/:id  | Atualizar produto | ✅        |
| DELETE | /api/produtos/:id  | Deletar produto   | ✅        |

---

## 🌐 Frontend (Interface Simples)

- Telas HTML com Bootstrap localizadas na pasta `/public`.
- Funcionalidades:
  - Login (**com bloqueio após 3 tentativas inválidas**)
  - Cadastro de usuário
  - CRUD completo de produtos (criar, listar, editar e excluir)
  - Interface protegida por autenticação JWT
  - Design responsivo e simples

---

## 🔒 Segurança Implementada

- ✔️ Autenticação via **JWT**
- ✔️ Middleware que protege rotas utilizando token
- ✔️ Senhas criptografadas com **bcrypt**
- ✔️ Token com tempo de expiração configurável
- ✔️ No frontend, após **3 tentativas de login inválidas**, o botão de login é bloqueado. O usuário precisa clicar em "**Liberar tentativas**" para tentar novamente.

---

## 💡 Melhorias Futuras (opcional)

- ⏳ Bloqueio temporário automático (ex.: bloqueia por 2 minutos)
- 🔐 Bloqueio inteligente no backend
- 📊 Logs de tentativas de login
- 🛡️ Sistema de roles (admin, user)

---

## 👨‍💻 Autor

**Lucas Ventura**  
Projeto de exemplo para fins acadêmicos e práticos com Node.js + MySQL + JWT + Frontend HTML+Bootstrap