import { Pool } from 'pg';


let conn;
let writedb;

if (!conn) {
  conn = new Pool({
    user: process.env.DB_USER
      , password: process.env.DB_PASS
      , host: process.env.DB_HOST
      , database: process.env.DB_NAME
    , table: process.env.DB_TABLE
      , port: process.env.DB_PORT
  });
}

if (!writedb) {
  writedb = new Pool({
    user: process.env.DB_WRITE_USER
    , password: process.env.DB_WRITE_PASS
    , host: process.env.DB_HOST
    , database: process.env.DB_NAME
    , table: process.env.DB_TABLE
    , port: process.env.DB_PORT
  })
}

export { conn, writedb };
