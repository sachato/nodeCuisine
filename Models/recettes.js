const mongoose = require('mongoose');

const recetteSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: Array, required: false },
  commentaire: { type: Array, required: false },
  note: { type: Array, required: false },
  ingregients: { type: Array, required: true },
  ustensiles: { type: Array, required: false },
});

module.exports = mongoose.model('Recette', recetteSchema);