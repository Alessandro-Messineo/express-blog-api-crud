// importo l'array con i posts
const posts = require('../data/postsArray');


// setto le funzioni che andranno nelle rotte

function index(req, res) {
    // res.json(posts);


     //Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredPosts = posts;

    // Se la richiesta contiene un filtro, allora filtriamo il menu
    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }

    // restituiamo la variabile filteredMenu
    // potrebbe essere stata filtrata o contenere il menu originale
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
    }else{
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
    if(posts){
    
        // elimino il post
        posts.splice(posts.indexOf(post), 1)
        ;
        // stampo la lista aggiornata
        console.log(posts);

        // cambio dello stato
        res.sendStatus(204)
    }else{
         res.status(404).json({ message: "error, post non trovato" })
    }
}

// esporto tutto
module.exports = { index, show, store, update, destroy }