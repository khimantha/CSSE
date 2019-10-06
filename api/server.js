var express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const port =config.port;





//Import Routes
const main_routes = require('./routes/mainRoutes');
const site_routes = require('./routes/siteRoutes');
const employee_routes = require('./routes/employeeRoutes');
const mobileApp_routes = require('./routes/mobileRoutes');


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


//Use Routes
app.use('/main', main_routes);
app.use('/site',site_routes);
app.use('/employee',employee_routes);
app.use('/mobile',cors(),mobileApp_routes);

//Connect to MongoDB
mongoose.connect(config.mongoURL, { useNewUrlParser: true }, err => {
    if (err) {
        console.log("DB Connection Error" + err);
    } else {
        console.log('MongoDB Connected')
    }
});

//Starting Server
app.listen(port, () => {
    console.log('Server started on port :' + port);
})



