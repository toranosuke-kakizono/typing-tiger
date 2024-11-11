const express = require('express');
const knex = require('../knex');

const app = express();

app.get('/', async (req, res) => {
    try {
        const users = await knex('user').select('*');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = { app };