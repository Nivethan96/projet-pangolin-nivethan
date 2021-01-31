const router = require('express').Router();
let Ami = require('../models/ami.model');

router.route('/addami').post((req,res) =>{
    const pangolinname = req.body.pangolinname;
    const aminame = req.body.aminame;

    const newAmi = new Ami({ pangolinname,aminame })

    newAmi.save()
    .then(users => res.json('Nouveau ami ajouté, vous pouvez consulter ses informations'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteami').delete((req,res) =>{
    Ami.findByIdAndDelete(req.params.id)
    .then(amis => res.json(amis))
    .catch(err => res.json.status(400).json('Error: ' + err));
})

module.exports = router;