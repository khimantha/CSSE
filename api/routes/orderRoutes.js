const express = require('express');
const orderRoutes = express.Router();

const orderController = require('../controllers/orderController');

orderRoutes.post('/add',orderController.addOrder)



module.exports = orderRoutes;