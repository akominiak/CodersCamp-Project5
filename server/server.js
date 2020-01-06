const reservation = require('../src/routes/reservations');
const movie = require('../src/routes/movies');
const cinemaShow = require('../src/routes/cinemaShows');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use('/reservation', reservation);
app.use('/movie', movie);
app.use('/cinemaShow', cinemaShow);

mongoose.connect('mongodb://localhost/Cinema')
    .then(() => console.log('Connected to Cinema Base'))
    .catch(err => console.error('Could not connect to Cinema Base', err));


  

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

