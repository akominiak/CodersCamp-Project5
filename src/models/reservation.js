const mongoose = require('mongoose');

const reservation = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        min: 1,
        max: 60
    },
    showId: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    sits: {
        type: Number,
        required: true,
        min: 1,
        max: 48
    }
});

const Reservation = mongoose.model('Reservation', reservation);

module.exports.Reservation = Reservation;