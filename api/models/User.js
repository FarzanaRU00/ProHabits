const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');

class User {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.password_digest = data.password_digest
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
          try {
            const result = await db.query(SQL`SELECT * FROM users;`);
            const users = result.rows.map(r => new User(r));
            resolve(users);
          } catch (err) {
            reject(`Could not retrieve users: ${error}`);
          }
        })
    }

    static find(username){
        return new Promise (async (resolve, reject) => {
            try {
                const result = db.query(SQL `SELECT * FROM users WHERE username = ${username};`);
                const user = new User(result.rows[0]);
                resolve(user);
            } catch (error){
                reject (`Could not retrieve username: ${error}`)
            }
        })
    }

    static create({ username, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`INSERT INTO users (username, password_digest) VALUES (${username},${password}) RETURNING *;`)
                if(!result.rows[0]) throw new Error("Username Already Exists")
                const user = new User(result.rows[0]);
                resolve(user);
            } catch (error) {
                reject(`Could not create user: ${error}`);
            }

        });
    }


}



module.exports = User;
