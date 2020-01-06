const Joi = require('joi');
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
function validateReservation(newReservation) {

    const schema = {
        userId: Joi.Number().min(1).max(60).required(),
        showId: Joi.Number().min(1).max(100).required(),
        sits: Joi.Number().min(1).max(48).required()
    };

    return Joi.validate(newReservation, schema);
}

const Reservation = mongoose.model('Reservation', reservation);

module.exports.validate = validateReservation;
module.exports.Reservation = Reservation;