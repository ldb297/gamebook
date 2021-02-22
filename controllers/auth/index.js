const express = require('express')
const axios = require('axios')
const passport = require('passport')
const router = express.Router()
const db = require('../../models')
const randomAlert = require('../../middleware/randomAlerts')
const key = process.env.API_KEY

router.get('/signup', async(req,res)=>{
    try{
        res.render('auth/signup')
    } catch(error){
        console.log(error)
        res.redirect('/404')
    }
})

router.get('/signin', async(req,res)=>{
    try{
        res.render('auth/signin')
    }catch(error){
        console.log(error)
        res.redirect('/404')
    }
})

router.get('/profile', async(req, res) => {
    try {
        const posts = await req.user.getPosts()
        for(let i = 0; i < posts.length; i++){
            let thisPost = posts[i]
            thisPost.comments = await db.comment.findAll({ where: { postId: thisPost.get().id}, include: [db.post, db.user]})
            const result = await axios.get(`http://api.rawg.io/api/games/${thisPost.get().slug}?key=${key}`)
            thisPost.result = result.data
        }
        res.render('auth/profile', {posts})
    } catch(error){
        console.log(error)
        res.redirect('/404')
    }
})

router.get('/logout', async(req,res)=>{
    try{
        req.logOut()
        req.flash('success', randomAlert())
        res.redirect('/')
    }catch(error){
        console.log(error)
        res.redirect('/404')
    }
})

router.put('/profile/update', async(req, res) => {
    try {
        await db.comment.update({content: req.body.content}, {where: {id: req.body.commentId}})
        res.redirect('/auth/profile')
    } catch(error){
        console.log(error)
        res.redirect('/404')
    }
})

router.delete('/profile/delete', async(req,res)=>{
    try{
        await db.comment.destroy({ where: {id: req.body.deleteComment}})
    // const comment = await db.comment.findOne({ where: {id: req.body.deleteComment}})
    // await comment.destroy()
    console.log(`Comment Deleted`)
    res.redirect('/auth/profile')
    } catch(e){
        console.log(`error occured, ${comment} was not deleted`)
        res.redirect('/auth/profile')
    }
})

router.post('/signup', async(req,res)=>{
    try{
        const {email, name, password} = req.body
        const [user, created] = await db.user.findOrCreate({
            where: {email}, 
            defaults: {name, password}})
            if(created){
                console.log(`${user.name} has joined`)
                const successObj = {
                    successRedirect: '/',
                    successFlash: `${name} has joined the book`
                }
                passport.authenticate('local', successObj)(req,res)
            } else {
                req.flash('error', 'email already exists')
            }
    } catch(e){
        console.log(`oh no, sign in failed. ${e.message}!!`)
        req.flash('error', 'email or password incorrect, please try again >_<')
        res.redirect('/auth/signup')
    }
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    successFlash: `Welcome back to the book, gamer!`,
    failureRedirect: '/auth/signin',
    failureFlash: `Email or Password incorrect`
}))

module.exports = router