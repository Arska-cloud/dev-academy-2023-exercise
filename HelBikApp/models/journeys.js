const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journeySchema = new Schema({
    start: {type: Date, required: true},
    end: {type: Date, required: true},
    startStation: {type: String, required: true},
    endStation: {type: String, required: true},
    distance: {type: String},
    duration: {type: String},
});

// virtual for journey's URL
journeySchema.virtual("url").get(function (){
    return `/database/journey/${this._id}`;
});

// export model
module.exports = mongoose.model("Journey", journeySchema);