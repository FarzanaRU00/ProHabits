const db = require("../dbConfig/init");
const SQL = require("sql-template-strings");

class Habit {
    constructor(data){
        this.id = data.id
    }
}

module.exports = Habit;
