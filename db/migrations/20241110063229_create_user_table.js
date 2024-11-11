exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('mail_address').notNullable().unique();
        table.string('password').notNullable();
        table.timestamp('create_timestamp').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
