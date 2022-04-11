const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');

class User {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.password_digest = data.password_digest
    }
}

module.exports = User;
