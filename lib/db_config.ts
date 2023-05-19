import { Pool } from 'pg';


let conn : Pool;
let writedb : Pool;

  conn = new Pool({
    user: process.env.DB_USER
      , password: process.env.DB_PASS
      , host: process.env.DB_HOST
      , database: process.env.DB_NAME
    , port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined
  });

  writedb = new Pool({
    user: process.env.DB_WRITE_USER
    , password: process.env.DB_WRITE_PASS
    , host: process.env.DB_HOST
    , database: process.env.DB_NAME
    , port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined
  })

export { conn, writedb };
