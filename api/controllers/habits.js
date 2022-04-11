const Habit = require('../models/Habit');

// Function to get all habits
async function index (req, res) {
    try {
        const habits = await Habit.all;
        res.status(200).json(habits)  // habits is sql table
    } catch (err) {
        res.status(500).json({ err })
    }
}




module.exports = { index };
