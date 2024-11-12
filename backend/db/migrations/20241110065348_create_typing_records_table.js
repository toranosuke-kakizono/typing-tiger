exports.up = function(knex) {
    return knex.schema.createTable('typing_records', (table) => {
        table.increments('id').primary();
        table.string('room_id').notNullable();
        table.integer('user_id').notNullable();
        table.integer('word_count').notNullable();
        table.integer('seconds').notNullable();
        table.integer('type_count').notNullable();
        table.integer('typo_count').notNullable();
        table.integer('accuracy').notNullable();
        table.integer('wpm').notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());

        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('typing_records');
};