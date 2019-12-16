const router = require('express').Router();

const AuthValidator = require('../bound/AuthValidator');
const AuthenticationController = require('../control/AuthController');

// noinspection JSUnresolvedFunction
router.post('/register', AuthValidator.register, AuthenticationController.register);

// noinspection JSUnresolvedFunction
router.post('/login', AuthValidator.login, AuthenticationController.login);

module["exports"] = router;
