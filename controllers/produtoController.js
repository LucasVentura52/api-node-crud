const connection = require('../config/db');

exports.listar = (req, res) => {
    connection.query('SELECT * FROM produtos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.criar = (req, res) => {
    const { nome, preco, descricao } = req.body;
    const sql = 'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)';
    connection.query(sql, [nome, preco, descricao], (err) => {
        if (err) throw err;
        res.json({ message: 'Produto criado com sucesso!' });
    });
};

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { nome, preco, descricao } = req.body;
    const sql = 'UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE id = ?';
    connection.query(sql, [nome, preco, descricao, id], (err) => {
        if (err) throw err;
        res.json({ message: 'Produto atualizado com sucesso!' });
    });
};

exports.deletar = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM produtos WHERE id = ?';
    connection.query(sql, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Produto deletado com sucesso!' });
    });
};