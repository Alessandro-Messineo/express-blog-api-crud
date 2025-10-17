// importo l'array con i posts
const posts = require('../data/postsArray');


// setto le funzioni che andranno nelle rotte

function index(req, res) {
    // res.json(posts);

    // setto l'array di post su una variabile di appoggio
    let filteredPosts = posts;

    // condizione se il tags esiste
    if (req.query.tags) {

        // filtro i post che includono il tag cercato
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // restituisco la variabile filteredPosts
    res.json(filteredPosts);
}

function show(req, res) {
    // rendo l'id un numero intero e lo salvo
    const id = parseInt(req.params.id);

    // cerco il post tramite l'id 
    const post = posts.find((e) => e.id === id)

    // condizione se il post viene trovato o no
    if (post) {

        // restituisco la lista
        res.json(post);
    } else {
        res.status(404).json({ message: "error, post non trovato" })
    }
}

function store(req, res) {
    res.send('Creazione di un post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function destroy(req, res) {

    // rendo l'id un numero intero e lo salvo
    const id = parseInt(req.params.id)

    // cerco il post tramite l'id 
    const post = posts.find(e => e.id === id);

    // condizione se il post viene trovato o no
    if (posts) {

        // elimino il post
        posts.splice(posts.indexOf(post), 1)
            ;
        // stampo la lista aggiornata
        console.log(posts);

        // cambio dello stato
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: "error, post non trovato" })
    }
}

// esporto tutto
module.exports = { index, show, store, update, destroy }