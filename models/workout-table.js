const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
}, {
    toJSON: {    
        virtuals: true
    }
});
ExampleSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => { return total + exercise.duration; }, 0);
});
const Example = mongoose.model("workout", ExampleSchema);

module.exports = Example;