const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')
const habitsController = require('../controllers/habits')
const { verifyToken } = require('../middleware/auth');

router.get('/', usersController.index)
router.get('/:username', verifyToken, usersController.show)
// router.get('/:username/habits',verifyToken, habitsController.showUserHabit);
// router.post('/:username/habits', verifyToken, habitsController.createUserHabit);
// router.delete('/:username/habits/:id',verifyToken, habitsController.deleteUserHabit);


module.exports = router;
