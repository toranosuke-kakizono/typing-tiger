const knex = require("knex");
const knexConfig = require("./knexfile.js");

// ローカル: dependence　デプロイ:products
module.exports = knex(knexConfig[process.env.NODE_ENV]);