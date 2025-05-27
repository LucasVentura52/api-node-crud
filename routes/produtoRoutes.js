const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const autenticarToken = require('../middlewares/authMiddleware');

router.get('/', autenticarToken, produtoController.listar);
router.post('/', autenticarToken, produtoController.criar);
router.put('/:id', autenticarToken, produtoController.atualizar);
router.delete('/:id', autenticarToken, produtoController.deletar);

module.exports = router;