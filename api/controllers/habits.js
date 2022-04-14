const Habit = require('../models/Habit');

// async function index (req, res) {
//     try {
//         const habits = await Habit.all;
//         res.status(200).json(habits)  // habits is sql table
//     } catch (err) {
//         res.status(500).json({ err })
//     }
// };

// async function show (req, res) {
//     try {
//         const habits = await Habit.find(req.params.id);
//         const users = await habits.users;
//         res.status(200).json({...habits, users})
//     } catch (err) {
//         res.status(404).send(err);
//     }
// };

// async function create (req, res) {
//     try {
//         const habits = await Habit.create(req.body)
//         res.status(201).json(habits)
//     } catch (err) {
//         res.status(422).send(err)
//     }
// };

// Get all Habits
async function getAllHabits (req, res) {
    try {
        const habits = await Habit.all
        res.status(200).json(habits)
    } catch (error) {
        res.status(500).send({error})
    }
};

// show habits by id
async function showHabit (req, res) {
    try {
        const habits = await Habit.findHabitById(req.params.habit_id);
        res.status(200).json({habits})
    } catch (error) {
        res.status(404).send({error});
    }
};

// Create a habit
async function createHabit (req, res) {
    try {
        const habits = await Habit.create(...req.body, username)
        res.status(201).json(habits)
    } catch (error) {
        res.status(422).send({error})
    }
};

// Delete a habit
async function deleteHabit (req, res){
    try {
        const deleted = await Habit.findHabitById(req.params.habit_id);
        await deleted.delete();
        res.status(204).json()
    } catch (error){
        if (error.message === 'Cannot get this habit'){
            res.status(404).send(error)
        } else {
            res.status(500).send(error)
        }
    }
}

module.exports = {getAllHabits, showHabit, createHabit, deleteHabit}


// async function showUserHabit (req, res){
//     try{
//         const userHabit = await UserHabit.showUserHabit(req.params.username)
//         res.status(200).json(userHabit)
//     } catch (err){
//         res.status(404).send(err)
//     }
// };

// async function createUserHabit (req, res){
//     try {
//         const jsDate = new Date().toLocaleString('en-GB', {timeZone: 'Europe/London'})
//         const userHabit = await UserHabit.createUserHabit({...req.body, date:jsDate}, req.params.username);
//         res.status(201).json(userHabit)
//     } catch (err){
//         res.status(422).send(err)
//     }
// }

// async function deleteUserHabit (req, res){
//     try {
//         const userHabit = await UserHabit.deleteUserHabit(req.params.id)
//         res.status(204).json(userHabit)
//     } catch (err){
//         res.status(404).send(err)
//     }
// }

// async function updateHabit (req, res){
//     try {
//         const habit = await UserHabit.updateHabit(req.params.user_habit_id);
//         // habit.updateHabit(req.body);
//         res.status(200).json();
//       } catch (err) {
//         res.status(404).json({ err });
//       }
//     }


// async function createHabitCounter (req, res){
//     try {
//         const jsDate = new Date().toLocaleString('en-GB', {timeZone: 'Europe/London'})
//         const habitTracker = await UserHabit.createHabitEntry({ ...req.body, date: jsDate});
//         res.status(201).json(habitTracker)
//     } catch(err){
//         res.status(422).send(err)
//     }
// }


// module.exports = {index, show, create}
    
    // showUserHabit, createUserHabit, deleteUserHabit, createHabitCounter, updateHabit};
