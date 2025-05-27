const connection = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }

    const sql = 'SELECT * FROM users WHERE username = ?';

    connection.query(sql, [username], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        const usuario = results[0];

        bcrypt.compare(password, usuario.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            const token = jwt.sign(
                { id: usuario.id, username: usuario.username },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({ token });
        });
    });
};

exports.register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }

    const sqlCheck = 'SELECT * FROM users WHERE username = ?';
    connection.query(sqlCheck, [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
            connection.query(sql, [username, hash], (err) => {
                if (err) throw err;
                res.json({ message: 'Usuário cadastrado com sucesso!' });
            });
        });
    });
};

