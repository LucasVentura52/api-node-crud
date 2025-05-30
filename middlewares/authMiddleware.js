const jwt = require('jsonwebtoken');
require('dotenv').config();

function autenticarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Token não encontrado' });

    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.usuario = usuario;
        next();
    });
}

module.exports = autenticarToken;