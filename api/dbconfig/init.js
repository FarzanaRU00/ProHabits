const { Pool } = require("pg");

// let config;

// if(process.env.DATABASE_URL) {
//   config = {
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   }
// }


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432
});

module.exports = pool;
