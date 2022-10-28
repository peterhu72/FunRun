const mongoose = require("mongoose");

const Time = mongoose.model("Time", new mongoose.Schema({
    timing: {
        type: Number
    },
    number: {
        type: Number
    },
    whichRun: {
        type: Number
    }
    }, {timestamps: true})
);

module.exports = Time;