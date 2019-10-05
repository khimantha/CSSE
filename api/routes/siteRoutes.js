const express = require('express');
const siteRoutes = express.Router();

const siteController = require('../controllers/siteController');

siteRoutes.post('/addSite',siteController.addSite)



module.exports = siteRoutes;