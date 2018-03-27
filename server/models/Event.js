import mongoose from "mongoose";

const Schema = mongoose.Schema;


const EventSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    start: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});



export const Event = mongoose.model('Event', EventSchema);