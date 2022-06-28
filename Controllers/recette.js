//modele de donnée
const Recettes = require('../Models/recettes');

//export function creation Recette
    exports.createRecette = (req, res, next) => {
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
    }
    

    //export function get all recettes
    exports.getAllRecettes = (req, res, next) => {
        Recettes.find()
          .then(recettes => res.status(200).json(recettes))
          .catch(error => res.status(400).json({ error }));
    }
    //export function get recette by id
    exports.getRecetteById = (req, res
    , next) => {
        Recettes.findById(req.params.id)
          .then(recette => res.status(200).json(recette))
          .catch(error => res.status(404).json({ error }));
    }
    //export function put recette by id
    exports.updateRecette = (req, res, next) => {
        Recettes.findByIdAndUpdate(req.params.id, req.body)
          .then(() => res.status(200).json({ message: 'Objet mis à jour !' }))
          .catch(error => res.status(400).json({ error }));
    }
    //export function delete recette by id
    exports.deleteRecette = (req, res, next) => {
        Recettes.findByIdAndRemove(req.params.id)
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }));
    }
