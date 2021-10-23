const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Working!');
})

module.exports = router;