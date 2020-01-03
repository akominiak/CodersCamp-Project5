const {createMovie} = require('../src/routes/movies');
const {createShow} = require('../src/routes/cinemaShows');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/Cinema')
    .then(() => console.log('Connected to Cinema Base'))
    .catch(err => console.error('Could not connect to Cinema Base', err));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//createMovie(1,'Gone with the wind','film_nr1','https://popmaster.pl/userdata/gfx/60492.jpg');
//createMovie(2,'The witcher','film_nr2','https://i.iplsc.com/the-witcher/00097NS0LFEPCN86-C122-F4.png');
//createMovie(3,'Riverdale','film_nr3','https://www.glamour.pl/media/cache/default_view/uploads/media/default/0004/20/6ebfb3929c4c943f13587f4db98473d25e3edeff.jpg');
//createMovie(4,'The crown','film_nr4','https://s3.party.pl/seriale/the-crown-zwiastun-528294-MT.jpg');

//createShow(1,'07.01.2020','18:45');
//createShow(2,'07.01.2020','16:15');
//createShow(3,'07.01.2020','13:00');
//createShow(4,'07.01.2020','18:05');

