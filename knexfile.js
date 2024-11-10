require('dotenv').config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            user: "postgres",
            database: "soloProject",
        },
        migrations: {
            directory: "./src/data/migrations",
        },
        seeds: { directory: "./src/data/seeds" },
    },
    production: {
        client: "pg",
        connection: process.env.RENDER_URL,
        migrations: {
            directory: "./src/data/migrations",
        },
        seeds: { directory: "./src/data/seeds" },
    }
}
