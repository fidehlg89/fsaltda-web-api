import { createPool } from 'mysql2/promise'

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'fsaldta_web_api',
        connectionLimit: 10
    });

    return connection;
}