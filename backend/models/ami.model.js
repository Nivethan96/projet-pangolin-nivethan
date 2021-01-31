const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Base de données : Amis
const amiSchema = new Schema({
    pangolinname: {type: String, required: true},
    aminame: {type: String, required: true}
},{
    timestamps: true,
});

const Ami = mongoose.model('Ami',amiSchema);

module.exports = Ami;