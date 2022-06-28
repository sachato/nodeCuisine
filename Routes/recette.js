const express = require('express');
const router = express.Router();

const auth = require('../Middleware/auth');

const recetteCtrl = require('../Controllers/recette');


router.get('/', recetteCtrl.getAllRecettes);
router.post('/', auth, recetteCtrl.createRecette);
router.get('/:id', recetteCtrl.getRecetteById);
router.put('/:id', auth, recetteCtrl.updateRecette);
router.delete('/:id', auth, recetteCtrl.deleteRecette);

module.exports = router;