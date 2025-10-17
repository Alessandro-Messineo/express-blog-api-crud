// importo express
const express = require("express");
const posts = require("../data/posts");

// settiamo il router
const router = express.Router();

// index
router.get('/', function (req, res) {
    // res.send('Lista dei post');
    res.json(posts);
});
// show
router.get('/:id', function (req, res) {
    // res.send('Dettagli del post ' + req.params.id);
    const id = parseInt(req.params.id);
    const post = posts.find((e) => e.id === id)
    if (post) {
        res.json(post);
    }else{
        res.status(404).json({message: "error"})
    }
});

// create
router.post('/', function (req, res) {
    res.send('Creazione di un post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esporto router
module.exports = router;