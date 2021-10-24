const express = require('express');
const model   = require('../models/Projects');
const router  = express();

router.get('/projects', (req, res) => {
    model.getAllProjects().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(`-- ERROR: ${error.message}`);

        res.status(400).send({message: 'Error'});
    })
})

router.get('/projects/:id', (req, res) => {
    const id = req.params.id;

    model.getProject(id).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(`-- ERROR: ${error}`);

        res.status(400).send({message: 'Error'});
    })
})

module.exports = router;