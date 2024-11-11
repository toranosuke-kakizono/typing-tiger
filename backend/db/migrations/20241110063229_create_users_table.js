exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('display_name').notNullable();
        table.string('username').notNullable().unique();
        table.string('mail_address').notNullable().unique();
        table.string('password').notNullable();
        table.timestamp('create_timestamp').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
