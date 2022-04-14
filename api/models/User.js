/**
 * @jest-environment jsdom
 */

const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');

class User {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.email = data.email
        this.password_digest = data.password_digest
    }

    // Function to get all users
    static get all() {
        return new Promise(async (resolve, reject) => {
          try {
            const result = await db.query(SQL`SELECT * FROM users;`);
            const users = result.rows.map(r => new User(r));
            resolve(users);
          } catch (error) {
            reject(`Could not retrieve users: ${error}`);
          }
        })
    }
    
    // Function to show all users 
    static findByUsername(username){
        return new Promise (async (resolve, reject) => {
            try {
                console.log(username)
                let result = await db.query(`SELECT * FROM users WHERE username = $1;`, [ username ]);
                console.log('working')
                const user = new User(result.rows[0]);
                console.log('working now')
                resolve(user);
            } catch (error){
                reject (`Could not retrieve username: ${error}`)
            }
        })
    }

    // Function to make a new user
    static create({ username, email, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                // console.log(username, email, password)
                let userData = await db.query(`INSERT INTO users (username, email, password_digest) VALUES ($1,$2,$3) RETURNING *;`, [username, email, password])
                // if(!result.rows[0]) throw new Error("Username Already Exists")
                // console.log('working 3')
                console.log(userData.rows[0])
                const user = new User(userData.rows[0]);
                resolve(user);
            } catch (error) {
                reject(`Could not create user: ${error}`);
            }

        });
    }


}



module.exports = User;
