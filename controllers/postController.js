// importo l'array con i posts
const posts = require('../data/postsArray');


// setto le funzioni che andranno nelle rotte

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((e) => e.id === id)
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "error" })
    }
}

function store(req, res) {
    res.send('Creazione di un post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esporto tutto
module.exports = { index, show, store, update, destroy }