//Basic Import Section
const express=require('express');
const app=express();
const clienteRouter = require('./routers/clienteRouter');
const cors=require('./middleware/cors');



//Middleware
app.use(express.json());
app.use(cors);

//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();

app.use('/clientes',clienteRouter);



//port listen
const PORT = 3000;
app.listen(PORT, () => console.log('server running on port ' + PORT))