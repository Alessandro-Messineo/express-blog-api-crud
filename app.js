// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;

// importiamo modulo router posts
const postRouter = require("./routers/posts")

app.use(express.static('public'));

// rotta di default
app.get("/",(req, res) =>{
    res.send(`<h1> Server del mio blog </h1>`)
})

// rotta della bacheca
// app.get("/bacheca",(req, res) =>{
    
// });

// rotta dei post
app.use("/posts", postRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
