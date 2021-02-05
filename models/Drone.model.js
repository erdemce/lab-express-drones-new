const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    propellers: {
        type: String,
        required: true,
        min: 1
    },
    maxSpeed: {
        type: Number,
        required: true,
        min: 1
    }
})

const drone = mongoose.model("drone", droneSchema);

module.exports = drone;