const express = require('express');
const Router = express.Router();
const { User } = require('../models/user');


Router.get('/home', (req,res) => {
    res.end("Welcome to Home Page!");
});

Router.post('/register', (req,res) => {
    const user = new User(req.body);

    user.save((err, userData) => {
        if(err){
            return res.json({ success: false, err})
        }
        else{
            return res.status(200).json({ success: true});
        } 
    })
})
module.exports = Router;