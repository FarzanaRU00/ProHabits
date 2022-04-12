const db = require("../dbConfig/init");
const SQL = require("sql-template-strings");
const User = require("./User");

class Habit {
    constructor(data){
        this.name = data.name;
        this.id = data.id
    }

    // Function to get all habits
    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT * FROM habits`);
                const habits = result.rows.map(h => new Habit(h));
                resolve(habits);
            } catch (error){
                reject(`Could not retrieve habits: ${error}`);
            }
        });
    }

    // Function to find habits by id
    static find(id){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT * FROM habits WHERE id = ${id};`);
                const habit = new Habit(result.rows[0]);
                resolve(habit)
            } catch(error){
                reject(`Could not retrieve habit: ${error}`)
            }
        })
    }

    // // Method to add a custom habit into the db

    // static create(data){
    //     return new Promise(async (resolve, reject) => {
    //         try{
    //             const result = await db.query(SQL`INSERT INTO habits (name) VALUES (${data.name}) RETURNING *;`);
    //             const habit = new Habit(result.rows[0])
    //             resolve(habit)
    //         } catch (error){
    //             reject(`Could not create a habit: ${error}`)
    //         }
    //     })
    // }

}

class UserHabit extends Habit{
    constructor(data){
        super(data);
        // Super enables us to call on the static methods in habit
        this.measurement = data.measurement
        this.frequency = data.frequency
        this.finished = data.finished
    }

    static getUserHabit(username){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL`SELECT users.username, users_habits.id AS id, users.id AS users_id, habits.id AS habits_id, habits.name AS    habits_name, to_char(user_habits.created, 'DD-MM-YYYY') as created user_habits.measurements, user_habits.frequency FROM user_habits 
                                                        JOIN habits on user_habits.habit_id  = habits.id 
                                                        JOIN users on users_habits.user_id = users.id 
                                                        WHERE users.username = ${username};`);
                const habits = result.rows.map(h => ({id: h.id, users_id: h.users_id,  habits_id: h.habits_id, habits_name: h.habits_name, created: h.created, measurements: h.measurements, frequency: h.frequency}));
                resolve(habits);
            } catch (error){
                reject(`Could not find habit: ${error}`)
            }
        })
    }


    static createUserHabit(data, username){
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.find(username);
                const result = await db.query(SQL`INSERT INTO user_habits (habit_id, user_id, measurement, frequency, created) VALUES (${data.habit_id}, ${user.id}, ${data.measurement}, ${data.frequency}, ${data.date}) RETURNING *;`)
                const newUserHabit = result.rows[0]
                resolve(newUserHabit)
            } catch (error){
                reject(`Could not create habit: ${error}`)
            }
        })
    }

    static deleteUserHabit(id){
        return new Promise(async (resolve, reject) => {
            try{
                const result = await db.query(SQL`DELETE FROM user_habits WHERE id = ${id};`)
                resolve(result.rowCount > 0 ? "deleted successfully" : "could not delete")
            } catch (error){
                reject(`Could not delete habit: ${error}`)
            }
        })
    }

<<<<<<< HEAD
    
=======
    static updateHabit(data){
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query(SQL `SELECT `)
            } catch (error) {
                
            }
        })
    }


    // static createHabitCounter(data){
    //     return new Promise(async (resolve, reject) => {
    //         try{
    //             const habitTracker = await db.query(SQL`SELECT frequency FROM user_habit WHERE id = ${id} user_habit_id;`)
    //             const result = await db.query(SQL `INSERT INTO habit_counter (user_habit_id, finished, finished_at) VALUES(${data.user_habit_id}, ${data.finished}, ${data.finished_at}) RETURNING *`)
    //             const newHabitTracker = result.row[0]
    //             resolve(newHabitTracker)
    //         } catch(error) {
    //             reject(`Could not create a habit counter: ${error}`)
    //         }
    //     })
    // }

>>>>>>> d81534c81a3251069995ec216870f75ceacdb817

}













module.exports = {Habit, UserHabit};


// class Habit {
//     constructor(data){
//         this.id = data.id
//         this.name = data.name
//         this.frequency = data.frequency
//         this.streak = data.streak
//         this.currentTime = data.currentTime
//         this.user_id = data.user_id
//     }

// // Function to get all habits
//     static get all() {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const result = await db.query(SQL`SELECT * FROM habits`);
//                 const habits = result.rows.map(h => new Habit(h));
//                 resolve(habits);
//             } catch (error) {
//                 reject(`Could not retrieve habits: ${err}`);
//             }
//         });
//     }

//     // Function to get a specific habit
//     static findByHabitId(id) {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const result = await db.query(SQL`SELECT * FROM habits WHERE id = ${habits.id};`);
//                 const habit = new Habit(result.rows[0]);
//                 resolve(habit);
//             } catch (error) {
//                 reject(`Could not find habit: ${err}`);
//             }
//         });
//     }

//     // Function to get a specific habit by username
//     static findByUserId(user_id) {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const result = await db.query(SQL`SELECT * FROM habits INNER JOIN users ON (habit.user_id = users.id) WHERE user_id = ${user_id};`);
//                 if(!result.rows[0]) throw new Error("No result found")
//                 let habits = result.rows.map(r => new Habit(r));
//                 resolve(habits);
//             } catch (error) {
//                 reject(`Could not find user: ${err}` );
//             }
//         });
//     }


// }

