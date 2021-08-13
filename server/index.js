require ('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express()

app.use(express.json())

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:SESSION_SECRET,
    cookie:{maxAge: 1000 * 60 * 60 * 24}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database up!')
}).catch(err => console.log('this is the error ' + err))

// USER ENDPOINTS
app.post('/auth/register', ctrl.register) // registers new user
app.post('/auth/username', ctrl.loginUsername) //login with username
app.post('/auth/email', ctrl.loginEmail) //login with email
app.get('/api/user', ctrl.getUser) //gets user info for redux
//



app.listen(SERVER_PORT, console.log(`You are on Port: ${SERVER_PORT} `))