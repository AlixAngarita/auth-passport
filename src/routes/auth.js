const express = require('express');
const router = express.Router();
const Usuario = require("../models/user");

router.get('/', 
    //passport.authenticate('bearer', { session: false }), 
    function(req, res) {
    res.json({username: req.user.username, email: req.user.email});
});

router.post("/nuevo", (req, res) => {
    console.log(req.body.user)
    const newUsuario = new Usuario(req.body.user);
        newUsuario
            .save()
             .then(user => res.json(user))
            .catch(err => console.log(err));

});

module.exports = router;