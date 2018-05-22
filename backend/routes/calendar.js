import express from 'express';
import { Event } from '../models/Event';

export const calendarRouter = express.Router();

calendarRouter.get('/calendar', (req, res, next) => {

    Event.find({ owner: req.session.userID.id })
        .then( data => res.status(200).json(data.map( item => ({ start: item.start, duration: item.duration, title: item.title  }))))
        .catch(e => console.error(e));

});
