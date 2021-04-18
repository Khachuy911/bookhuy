const express= require('express');
const router = express.Router();
const checkAuth = require("../middlewares/auth");
const authController = require('../app/controllers/authController');

router.route('/login')
											.get(authController.login)
											.post(checkAuth.checkauth,authController.loadLogin)
router.route('/createAccount')
											.get(authController.createAccount)
											.post(authController.loadCreateAccount)
router.route('/')
											.get(authController.myself)

module.exports = router;
