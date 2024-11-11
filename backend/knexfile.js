require('dotenv').config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
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
