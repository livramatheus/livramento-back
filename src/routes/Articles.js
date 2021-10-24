const express = require('express');
const model   = require('../models/Articles');
const router  = express();

router.get('/articles', (req, res) => {
    model.getAllArticles().then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(`-- ERROR: ${error.message}`);

        res.status(400).send({message: 'Error'});
    })
})

router.get('/articles/:id', (req, res) => {
    const id = req.params.id;

    model.getArticle(id).then((success) => {
        res.send(success);
    }).catch((error) => {
        console.log(`-- ERROR: ${error}`);

        res.status(400).send({message: 'Error'});
    })
})

module.exports = router;