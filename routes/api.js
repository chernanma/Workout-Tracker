const router = require("express").Router();
const Workout = require("../models/workout.js");
const Exercise = require("../models/exercise.js");

//API end point to create workout 
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

let durationEx=0;
// API Route to create an Exercise and attach it to the workout 
router.put("/api/workouts/:id", (req, res) => {
  Exercise.create(req.body)
    .then(({ _id }) => Workout.findOneAndUpdate({_id:req.params.id}, { $inc: { totalDuration: +req.body.duration}, $push: { exercises: _id }}, { new: true }))
    .then(dbWorkout => {      
        res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//API end point to pull all workout data 
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })  
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//API route to pull  last 7 workouts data 
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .limit(7)
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
