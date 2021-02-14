const axios = require('axios')
const express = require('express')
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
    axios.get(`http://api.rawg.io/api/games?id=${id}`)
    .then(result =>{
        console.log(result)
        let data = result.data
        res.render('post', {data: data})
    }).catch(e =>{
        console.log(`${e}`)
    })
})

module.exports = router