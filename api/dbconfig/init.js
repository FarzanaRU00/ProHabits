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
    user: process.env.PG_USER,      //postgres user
    host: process.env.PG_ENDPOINT,  //localhost (I also tried 127.0.0.1)  //postgres user password
    port: process.env.PG_PORT       //5432
});

module.exports = pool;
