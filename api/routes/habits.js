const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')


router.get('/', habitsController.getAllHabits)
router.get('/:id', habitsController.showHabit)
router.post('/', habitsController.createHabit)



module.exports = router;
