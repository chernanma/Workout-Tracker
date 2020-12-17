const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please enter exercise Type",
  },
  name: {
    type: String,
    trim: true,
    required: "Please enter Name",
  },
  duration: {
    type: Number,
    required: "Enter duration of exercise",
  },
  weight: {
    type: Number,
    required: "Enter weight",
  },
  reps: {
    type: Number,
    required: "Enter # of reps",
  },
  sets: {
    type: Number,
    required: "Enter # of sets",
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
