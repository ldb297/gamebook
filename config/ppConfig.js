const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')

passport.serializeUser((user, cb)=>{
    cb(null, user.id)
})

passport.deserializeUser((id, cb)=>{
    db.user.findByPk(id)
    .then(user =>{
        if(user){
            cb(null, user)
        }
    }).catch(e =>{
        console.log(`deserialize error ${e}`)
    })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb)=>{
    db.user.findOne({where:{email}
    }).then(user =>{
        if(!user || !user.validPassword(password)){
            cb(null, false)
        } else {
            cb(null, user)
        }
    }).catch(e =>{
        console.log(`local strategy ${e}`)
    })
}))

module.exports = passport