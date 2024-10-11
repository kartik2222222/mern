const express = require('express');

const app = express();

const dbconfig = require('./db')
const roomsrouters = require('./routes/roomsroutes')



app.use('/api/rooms',roomsrouters)




const port = process.env.port || 5000;

app.listen(port,() => console.log(`server is running at ${port}`))