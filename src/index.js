const knex = import("knex");
const knexConfig = import("../knexfile.js");


// ローカル.envとRender両方で直接指定すると、下記記述が可能になる。
module.exports = knex(knexConfig[process.env.NODE_ENV]);