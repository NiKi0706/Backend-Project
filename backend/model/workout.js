const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: { type: String, trim: true, required: true },
    type: { type: String, trim: true, required: true },
    muscle: { type: String, trim: true, required: true },
    equipment: { type: String, trim: true, required: true },
    level: { type: String, trim: true},
    instructions: { type: String, trim: true, required: true },
    //workout: { type: String, trim: true },
    //userId: { type: Schema.Types.ObjectId, ref: 'users' },
    }, {
        timestamps: true,
        collection: "Workout"
    });

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;