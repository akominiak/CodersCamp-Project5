const Joi = require('joi');
const mongoose = require('mongoose');

const show = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    date: {
        type: String,
        min: 1,
        max: 10
    },
    hour: {
        type: String,
        required: true,
        min: 1,
        max: 6
    }
});

function validateShow(newShow) {

    const schema = {
        movieId: Joi.Number().min(1).max(100).required(),
        date: Joi.string().min(1).max(10),
        hour: Joi.string().min(1).max(6)

    };

    return Joi.validate(newShow, schema);
}
const Show = mongoose.model('Show', show);

module.exports.validate = validateShow;
module.exports.Show = Show;