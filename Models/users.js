const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usersSchema = mongoose.Schema({
  name: { type: String, required: true, unique : true },
  email: { type: String, required: true, unique : true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  photo: { type: String, required: false },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', usersSchema);