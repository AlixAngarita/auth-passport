const express = require('express');
const router = express.Router();

router.get('/', 
    //passport.authenticate('bearer', { session: false }), 
    function(req, res) {
    res.json({username: req.user.username, email: req.user.email});
});

router.post("/nuevo", (req, res) => {
    //console.log(req.body.usuario)
    const newUsuario = new Usuario(req.body.usuario);
        newUsuario
            .save()
             .then(usuario => res.json(usuario))
            .catch(err => console.log(err));

});

module.exports = router;