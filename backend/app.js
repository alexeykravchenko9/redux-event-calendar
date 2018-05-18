import express from 'express';
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import * as db from './utils/dbFunctions';
import * as login from './routes/login';
import { router } from './routes/events';

import config from './config';
const { serverConf, session: sessionConf } = config();

const app = express();


// Connect DB
app.use( (req, res, next) => {

    db.dbConnect().then( db => next()).catch(e => console.error(e.message + ' Please check ENV config of DB CONNECTION', 'ERROR'));

});

app.use( cors({ origin: "*", credentials: true  }) );

app.use( bodyParser.json() );

app.use( session({
    secret: sessionConf.secret,
    cookie: { maxAge: 60000, httpOnly: true },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: true,
    rolling: true

}));

app.use( cookieParser() );


// Events API
app.use('/api', router);



app.post('/api/login', login.post);


app.get('/', (req, res, next) => {
   req.session.Second = 'Test 2';
   res.send("Visits: " + req.session.Second);
});


// RESTful api handlers

app.get('/api/eventcalendar', (req, res) => {
    db.listUsers().then( data => res.send(data) );
    // db.showCollections().then( data => res.send(data) );
});

app.get('/', (req, res) => {
    res.send('Server is running');
});



app.get('/api/db', (req, res) => {

    db.showDb().then( data => res.json(data));

});



const server = app.listen(serverConf.port, () => {
    console.log(`Server API running on port ${serverConf.port}`);
});

