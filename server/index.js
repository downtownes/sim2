require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , checkForSession = require('./middlewares/checkForSession')
    , controller = require('./controllers/authController')
    , PORT = 4000;


const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
//connects us to the backend database
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})
//middleware that will create a session if one does not already exist
app.use(checkForSession);


app.get('/api/getid', controller.getIdentification);
app.post('/api/auth/register', controller.register);


app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})