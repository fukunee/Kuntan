const router = require('express').Router();

const AuthValidator = require('../busiValid/AuthValidator');
const AuthenticationController = require('../controllers/AuthController');

// noinspection JSUnresolvedFunction
router.post('/register', AuthValidator.register, AuthenticationController.register);

// noinspection JSUnresolvedFunction
router.post('/login', AuthValidator.login, AuthenticationController.login);

module["exports"] = router;
