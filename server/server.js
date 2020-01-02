const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/todoList')
    .then(() => console.log('Connected to todo List Base'))
    .catch(err => console.error('Could not connect to todo List Base', err));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));