const express = require('express');
const router = express.Router();
const Users = require('../models/userModel');

router.get('/', (req, res) => {
    res.render('./login/login');
});

router.get('/cadastrar', (req, res) => {
    res.render('./cadastrar/cadastrar');
})

router.post('/cadastrar/salvar', async (req, res) => {
    let body = req.body;
    Users.create(body);
    res.render('./login/login');
    alert('Usuário cadastrado com sucesso!');
})

module.exports = router;