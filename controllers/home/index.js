const axios = require('axios')
const express = require('express')
const db = require('../../models')
const router = express.Router()

router.get('/', (req,res)=>{
    const search = req.query.search
    // const key = process.env.API_KEY
    // let qs = {params: {s: search, apikey: process.env.API_KEY, }}
    axios.get(`https://api.rawg.io/api/games?search=${search}`)
    .then(result =>{
        let data = result.data
        res.render('home', {data: data})
    }).catch(e =>{
        console.log(`${e}`)
    })
})

router.get('/post', (req,res)=>{
    const id = req.query.id
    axios.get(`http://api.rawg.io/api/games/${id}`)
    .then(result =>{
        let data = result.data
        console.log(data.slug)
        res.render('post', {data: data})
    }).catch(e =>{
        console.log(`${e}`)
    })
})

router.get('/fav', (req,res)=>{
    res.render('profile', [post, comment])
})

router.post('/fav', async(req,res)=>{
    try{
        let {username, slug, title, content} = req.body
        let user = await db.user.findOne({ where: {name: username }})
        let post = await db.post.findOrCreate({where: {slug, title}})
        let comment = await db.comment.findOrCreate({where: {content}})
        await user.addPost(post)
        await user.addComment(comment)
        await post.addComment(comment)
        res.redirect('/profile', [post, comment])
    } catch(e){
        console.log(`${e.message}`)
    }
})

module.exports = router