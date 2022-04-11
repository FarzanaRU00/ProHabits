const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits')
const { verifyToken } = require('../middleware/auth');

router.get('/', habitsController.index)
router.get('/:id', verifyToken, habitsController.show)
router.post('/', verifyToken, habitsController.create)



module.exports = router;
