const { Client } = require('pg');

async function executeQuery(query) {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    try {
        await client.connect();
        const result = await client.query(query);
        return result.rows;
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
}

module.exports = { executeQuery };