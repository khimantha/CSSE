const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const port =config.port;

//Import Routes
const main_routes = require('./routes/mainRoutes');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Use Routes
app.use('/main', main_routes);

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



