const express = require('express');
const router = express.Router();

// const auth = require('../controllers/autCon');
const auth = require('../controllers/autCon');

router.post('/login', auth.login).post('/register', auth.register);

module.exports = router;
