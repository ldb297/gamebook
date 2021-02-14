//set up environment 
require('dotenv').config()

//import packages
const express = require('express')
const ejs = require('ejs')
const layouts = require('express-ejs-layouts')
const axios = require('axios')
const logger = '*********************'

//set middleware
const app = express()
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended:false}))

//routes 
app.get('/', (req,res)=>{
    console.log(`${logger} landing page ${logger}`)
    res.render('index')
})

//controllers
app.use('/home', require('./controllers/home'))

//server
const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧You're listening to WQKZ ${PORT}🎧`))