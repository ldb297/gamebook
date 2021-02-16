//set up environment 
require('dotenv').config()

//import packages
const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const axios = require('axios')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')

//set middleware
const app = express()
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))
app.use(require('morgan')('dev'))

const CURRENT_SESSION = process.env.CURRENT_SESSION 
const isLoggedIn = require('./middleware/isLoggedIn')

const sessionObject = {
    secret: CURRENT_SESSION,
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionObject))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use((req,res, next)=>{
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next()
})
const logger = '*********************'

//routes 
app.get('/', (req,res)=>{
    console.log(`${logger} landing page ${logger}`)
    res.render('index')
})

//controllers
app.use('/home', require('./controllers/home'))
// app.use('/auth', require('./controllers/auth'))

//server
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧You're listening to WQKZ ${PORT}🎧`))