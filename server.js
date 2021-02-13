
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

//routes 
app.get('/', (req,res)=>{
    console.log(`${logger} landing page ${logger}`)
    res.render('index')
})

//server

const PORT = process.env.PORT || 8888
app.listen(PORT, console.log(`🎧You're listening to WQKZ ${PORT}🎧`))