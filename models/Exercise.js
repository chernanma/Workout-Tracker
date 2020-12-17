const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
{
    type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name of the exercise"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    distance: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;

