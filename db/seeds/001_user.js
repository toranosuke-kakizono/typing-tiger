const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('user').del();

  // シーケンスをリセット
  await knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 1');

  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      display_name: faker.internet.displayName(),
      username: faker.internet.username(),
      mail_address: faker.internet.email(),
      password: faker.internet.password(),
      create_timestamp: faker.date.past()
    });
  }

  await knex('user').insert(users);
};