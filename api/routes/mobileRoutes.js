const express = require('express');
const mobileRoutes = express.Router();

const mobileController = require('../controllers/mobileAppController');

// mainRoutes.post('/register',mainController.testRoute);
mobileRoutes.post('/login',mobileController.login);



module.exports = mobileRoutes;