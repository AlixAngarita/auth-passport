const express = require('express');
const router = express.Router();
const passport = require('passport')


router.get('/login', 
    passport.authenticate('bearer', { session: false }), (req,res) => {
        res.json({username: req.user.username, email: req.user.email})
    }
);

module.exports = router;