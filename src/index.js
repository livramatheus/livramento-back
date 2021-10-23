require('dotenv').config()
const express = require('express');
const app = express();
const Projects = require('./routes/Projects');

app.use(Projects);

app.listen(3001, () => {
    console.log("Listening on PORT 3001")
});