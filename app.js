const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});