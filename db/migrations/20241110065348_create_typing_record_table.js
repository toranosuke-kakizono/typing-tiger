exports.up = function(knex) {
    return knex.schema.createTable('typing_record', (table) => {
        table.increments('id').primary();
        table.string('room_id').notNullable();
        table.integer('user_id').notNullable();
        table.integer('word_count').notNullable();
        table.integer('seconds').notNullable();
        table.integer('accurate_word_count').notNullable();
        table.integer('inaccurate_word_count').notNullable();
        table.integer('accuracy').notNullable();
        table.integer('wpm').notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());

        table.foreign('user_id').references('id').inTable('user').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('typing_record');
};