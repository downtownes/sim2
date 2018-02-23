require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , PORT = 4000;


const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));





app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})