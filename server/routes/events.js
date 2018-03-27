import express from "express";
import { Event } from "../models/Event";
// import mongoose from "mongoose";

export const router = express.Router();

router.post('/events', (req, res, next) => {

    // Owner we will get from user Session

    const { title, start, duration, owner } = req.body;
    let status;

    Event.find({ title }, (err, events) => {
        if(events.length <= 0) {

            const event = new Event({ title, start, duration, owner });
            event.save( (err) => {
                if(err) return next(err);
                res.sendStatus(201);

                console.log('Event created', event);
            });

        } else {
            res.sendStatus(403);
            console.log('Event already exist');
        }

    });

})
.get('/events', (req, res) => {

    Event.find().then( data => res.status(200).json(data) );

})
.delete('/events/:event_id', (req, res) => {

    Event.remove({ _id: req.params.event_id }, (err) => err );
    res.status(200).json({ message: "Removed " + req.params.event_id });

});

