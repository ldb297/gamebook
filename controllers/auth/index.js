const express = require('express')
const passport = require('passport')
const router = express.Router()
const db = require('../../models')

router.get('/signup', (req,res)=>{
    res.render('auth/signup')
})

router.get('/signin', (req,res)=>{
    res.render('auth/signin')
})

router.get('/logout', (req,res)=>{
    req.logOut()
    req.flash('success', 'see ya later cowboy')
    res.redirect('/')
})

module.exports = router