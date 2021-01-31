const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// Connexion au serveur avec le port 4000
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
// Connexion à la base de données MongoDB ATLAS
// ATLAS_URI se trouve dans le ficher .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connexion = mongoose.connection;
connexion.once('open', ()=>{
    console.log("MongoDB ATLAS : Database connected succsessfully")
});

//const amiRouter = require('./routes/amis');
const pangolinRouter = require('./routes/pangolins');

//app.use('/amis', amiRouter);
app.use('/pangolins', pangolinRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});