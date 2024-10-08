const express = require('express');

const app = express();

const dbconfig = require('./db')



const port = process.env.port || 5000;

app.listen(port,() => console.log(`server is running at ${port}`))