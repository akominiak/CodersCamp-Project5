
const {Movie, validate} = require('../models/movie');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});


router.post('/', async (req, res) => {

    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    });
    console.log(newMovie);
    await newMovie.save();
    res.send(newMovie);
});


router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) return res.status(404).send('Movie not found');
    res.send(movie);
});

module.exports = router;
