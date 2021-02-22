//set up environment 
require('dotenv').config()

//import packages
const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const axios = require('axios')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const db = require('./models')

//set middleware
const app = express()
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
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
app.get('/', async(req,res)=>{
    try{
        const posts = await db.post.findAll({ include: [db.user, db.comment] })
        res.render('main/index', {posts})
    } catch(error){
        console.log(error)
        res.redirect('/404')
    }
})


app.get('/404', (req, res)=>{
    console.log(`beep boop bonk`)
    res.status(404).render('error/404');
});

//controllers
app.use('/home', require('./controllers/home'))
app.use('/auth', require('./controllers/auth'))

//server
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧You're listening to WQKZ ${PORT}🎧`))