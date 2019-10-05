const express = require('express');
const employeeRoutes = express.Router();

const employeeController = require('../controllers/employeeController');

employeeRoutes.post('/add',employeeController.addEmployee)



module.exports = employeeRoutes;