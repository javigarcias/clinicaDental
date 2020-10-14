//Basic Import Section
const express=require('express');
const app=express();


//Middleware
app.use(express.json());

//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();


//port listen
const PORT = 3000;
app.listen(PORT, () => console.log('server running on port ' + PORT))