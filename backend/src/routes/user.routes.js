const router = require('express').Router();
const controller = require('../controllers/users.controllers.js');

router.post('/user/', controller.CreateUser);
router.get('/user/:user_email', controller.GetUser);

module.exports = router; 