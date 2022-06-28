const express = require('express');
const mongoose = require('mongoose');

//modele de donnée
const Recettes = require('./Models/recettes');

const app = express();

//conection mongoDB
mongoose.connect('mongodb+srv://sacha:SALUTmongo2.0*@cluster0.tzwbl.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());


//uttilisation des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//get route 
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome on my server'
    });
});

//get route recettes
app.get('/api/recettes', (req, res, next) => {
    Recettes.find()
      .then(recettes => res.status(200).json(recettes))
      .catch(error => res.status(400).json({ error }));
});

//post recettes
app.post('/api/recettes', (req, res, next) => { 
    const recette = new Recettes({
        name: req.body.name,    
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo,
        commentaire: req.body.commentaire,
        note: req.body.note,
        ingregients: req.body.ingregients,
        ustensiles: req.body.ustensiles
    });
    recette.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

//get recette by id
app.get('/api/recettes/:id', (req, res, next) => {
    Recettes.findById(req.params.id)
        .then(recette => res.status(200).json(recette))
        .catch(error => res.status(404).json({ error }));
});


//put recette by id
app.put('/api/recettes/:id', (req, res, next) => {
    Recettes.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).json({ message: 'Objet mis à jour !' }))
        .catch(error => res.status(400).json({ error }));
});


//delete recette by id
app.delete('/api/recettes/:id', (req, res, next) => {
    Recettes.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
});




module.exports = app;

