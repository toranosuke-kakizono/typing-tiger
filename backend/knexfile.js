require('dotenv').config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            user: "postgres",
            database: "soloProject",
        },
        migrations: {
            directory: "./db/migrations",
        },
        seeds: { directory: "./db/seeds" },
    },
    production: {
        client: "pg",
        connection: process.env.RENDER_URL,
        migrations: {
            directory: "./db/migrations",
        },
        seeds: { directory: "./db/seeds" },
    }
}
