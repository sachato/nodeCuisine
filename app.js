const express = require('express');
const mongoose = require('mongoose');

//routes
const recetteRoutes = require('./Routes/recette');
const userRoutes = require('./Routes/user');

//initialisation de l'app
const app = express();

//uttilisation de json
app.use(express.json());

//specification chemin d'acces
app.use('/api/recette', recetteRoutes);
app.use('/api/auth', userRoutes);


//conection mongoDB
mongoose.connect('mongodb+srv://sacha:SALUTmongo2.0*@cluster0.tzwbl.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));




//uttilisation des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



module.exports = app;

