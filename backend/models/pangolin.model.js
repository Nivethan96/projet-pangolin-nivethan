const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Base de données : Pangolins
const pangolinSchema = new Schema({
    pangolinname: {type: String, required: true, unique: true, minlength: 4},
    password: {type: String, required: true, unique: true, minlength: 8},
    nom: {type: String, required: true, unique: true},
    age: { type: Number, required: true},
    race: {type: String, required: true},
    nourriture:{type: String, required: true}
},{
    timestamps: true,
});

const Pangolin = mongoose.model('Pangolin',pangolinSchema);

module.exports = Pangolin;