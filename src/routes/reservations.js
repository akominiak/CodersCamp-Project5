const {Reservation, validate} = require('../models/reservation');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const reservations = await Reservation.find();
    res.send(reservations);
});

router.post('/', async (req, res) => {
   
    const newReservation = new Reservation({
        userId: req.body.userId,  
        showId: req.body.showId, 
        sits: req.body.sits 
    });
    await newReservation.save();
    res.send(newReservation);
});

router.delete('/:id', async (req, res) => {
    const reservation = await Reservation.findByIdAndRemove(req.params.id);
    if (!reservation) return res.status(404).send('Reservation not found');
    res.send(reservation);
});

module.exports = router;