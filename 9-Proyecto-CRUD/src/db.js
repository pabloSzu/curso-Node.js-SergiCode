import pg from 'pg'

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "poyusco12",
    database: "prueba",
    port: "5432",
})

