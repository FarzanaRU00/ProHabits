const db = require("../dbConfig/init");
const SQL = require("sql-template-strings");

class Habit {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.frequency = data.frequency
        this.streak = data.streak
        this.currentTime = data.currentTime
        this.user_id = data.user_id
    }


    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT * FROM habits`);
                const habits = result.rows.map(h => new Habit(h));
                resolve(habits);
            } catch (error) {
                reject(`Could not retrieve habits: ${err}`);
            }
        });
    }

    static findByHabitId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT * FROM habits WHERE id = ${id};`);
                const habit = new Habit(result.rows[0]);
                resolve(habit);
            } catch (error) {
                reject(`Could not find habit: ${err}`);
            }
        });
    }

    static findByUserId(user_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT * FROM habits INNER JOIN users ON (habit.user_id = users.id) WHERE user_id = ${user_id};`);
                if(!result.rows[0]) throw new Error("No result found")
                let habits = result.rows.map(r => new Habit(r));
                resolve(habits);
            } catch (error) {
                reject(`Could not find user: ${err}` );
            }
        });
    }


}

module.exports = Habit;
