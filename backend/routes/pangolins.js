const router = require('express').Router();
let Pangolin = require('../models/pangolin.model');

router.route('/showallpangolins').get((req,res)=>{
    Pangolin.find()
    .then(pangolins => res.json(pangolins))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/addpangolin').post((req,res) =>{
    const pangolinname = req.body.pangolinname;
    const password = req.body.password;
    const nom = req.body.nom;
    const age = Number(req.body.age);
    const race = req.body.race;
    const nourriture = req.body.nourriture;

    const newPangolin = new Pangolin({
        pangolinname,password,nom,age,race,nourriture,
    })

    newPangolin.save()
    .then(pangolins => res.json('Nouveau pangolin ajouté, Bienvenu dans le groupe'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/editpangolin/:id').post((req, res )=>{
    Pangolin.findById(req.body.id)
    .then(pangolin => {
        pangolin.nom = req.body.nom;
        pangolin.age = req.body.age;
        pangolin.race = req.body.race;
        pangolin.nourriture = req.body.nourriture;

        pangolin.save()
            .then(users => res.json('Pangolin has been updated'))
            .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;