const express = require('express')
const router = express.Router()

const { User } = require('../models');

// Add your routes here - above the module.exports line

module.exports = router

router.get('/users', function (req, res) {
    return User.findAll()
    .then((users) => { 
        res.send(users) 
    })
    .catch((err) => {
        return res.send(err)
    });
})

router.post('/signup', async function (req, res) {
    const user = await User.create({ email: req.params.email });
    res.render('index');
})