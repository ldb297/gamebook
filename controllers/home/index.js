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
        res.render('main/searchResults', {data: data})
    }).catch(e =>{
        console.log(`${e}`)
    })
})

router.get('/search', async(req,res)=>{
    try {
        const id = req.query.id
        let result = await axios.get(`http://api.rawg.io/api/games/${id}`)
        let data = result.data
        res.render('main/post', {data})
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