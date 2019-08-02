const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const port = process.env.PORT || 3000;;

//Import Routes
const main_routes = require('./routes/mainRoutes');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Use Routes
app.use('/main', main_routes);


//Starting Server
app.listen(port,()=>{
    console.log('Server started on port :' + port);
})



