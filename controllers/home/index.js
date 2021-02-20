const axios = require('axios')
const express = require('express')
const db = require('../../models')
const router = express.Router()
const key = process.env.API_KEY

router.get('/', async(req,res)=>{
    try {
    const search = req.query.search
    let result = await axios.get(`https://api.rawg.io/api/games?key=${key}&search=${search}`)
    let data = result.data
    res.render('main/searchResults', {data})
    } catch(e){
        console.log(`${e.message}`)
    }
})

router.get('/search', async(req,res)=>{
    try {
        const id = req.query.id
        let result = await axios.get(`http://api.rawg.io/api/games/${id}?key=${key}`)
        let data = result.data
        let posts = await db.post.findAll({where: {slug: id}, include: [db.comment, db.user]})
        console.log(posts)
        res.render('main/post', {data, posts})
    } catch(e){
        console.log(`${e.message}`)
    }
})

router.post('/post', async(req,res)=>{
    try{
        let {username, slug, title, content} = req.body
        let user = await db.user.findOne({ where: {name: username }, include: [db.post, db.comment]})
        let [post, postCreated] = await db.post.findOrCreate({where: {slug, title}, include: [db.comment]})
        let [comment, commentCreated] = await db.comment.findOrCreate({where: {content}})
        await user.addPost(post)
        await user.addComment(comment)
        await post.addComment(comment)
        res.redirect('/auth/profile')
    } catch(e){
        console.log(`${e.message}`)
    }
})

module.exports = router