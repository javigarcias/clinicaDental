//Basic Import Section
const express=require('express');
const app=express();
const clienteRouter = require('./routers/clienteRouter');
const citaRouter = require('./routers/citaRouter');

const cors=require('./middleware/cors');



//Middleware
app.use(express.json());
app.use(cors);

//db connection
const dbconnect = require('./config/dbconnect');
dbconnect();

app.options('/*', (req, res) => res.send());

app.use('/clientes',clienteRouter);
app.use('/citas', citaRouter);



//port listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('server running on port ' + PORT));