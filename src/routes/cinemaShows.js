
const {Show, validate} = require('../models/cinemaShow');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const shows = await Show.find();
    res.send(shows);
});


router.post('/', async (req, res) => {
    const newShow = new Show({
        movieId: req.body.MovieId,
        date: req.body.date,
        hour: req.body.hour
    });
    console.log(newShow);
    await newShow.save();
    res.send(newShow);
});



router.delete('/:id', async (req, res) => {
    const show = await Show.findByIdAndRemove(req.params.id);
    if (!show) return res.status(404).send('Show not found');
    res.send(show);
});


module.exports = router;