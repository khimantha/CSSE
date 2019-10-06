var express = require('express');
var cors = require('cors')

const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const port =config.port;

//Import Routes
const main_routes = require('./routes/mainRoutes');
const site_routes = require('./routes/siteRoutes');
const employee_routes = require('./routes/employeeRoutes');
const mobileApp_routes = require('./routes/mobileRoutes');
const order_routes = require('./routes/orderRoutes');



//Connect to MongoDB
mongoose.connect(config.mongoURL, { useNewUrlParser: true }, err => {
    if (err) {
        console.log("DB Connection Error" + err);
    } else {
        console.log('MongoDB Connected')
    }
});
const app = express();
// app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});







app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());


//Use Routes
app.use('/main', main_routes);
app.use('/site',site_routes);
app.use('/employee',employee_routes);
app.use('/mobile',mobileApp_routes);
app.use('/order',order_routes);




//Starting Server
app.listen(port, () => {
    console.log('Server started on port :' + port);
})



