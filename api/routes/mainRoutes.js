const express = require('express');
const mainRoutes = express.Router();

const mainController = require('../controllers/mainController');

mainRoutes.get('/test',mainController.testRoute)



module.exports = mainRoutes;