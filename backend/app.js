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
import { calendarRouter } from "./routes/calendar";


//Middlewares
import checkLoggedUser from "./middlewares/checkLoggedUser";
import secureRoute from "./middlewares/secureRoute";

import config from './config';
const { serverConf, session: sessionConf, clientConf } = config();

const app = express();


// Connect DB
app.use( (req, res, next) => {

    db.dbConnect().then( db => next()).catch(e => console.error(e.message + ' Please check ENV config of DB CONNECTION', 'ERROR'));

});

app.use( cors({ origin: clientConf.url, credentials: true  }) );

app.use( bodyParser.json() );

app.use( cookieParser() );

app.use( session({
    secret: sessionConf.secret,
    key: 'auth_sid',
    cookie: { maxAge: null, httpOnly: true },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    rolling: true

}));

app.get('/', checkLoggedUser );

// Events API

app.post('/api/login', login.signIn);

app.post('/api/logout', login.signOut);


app.use('/api', router);

app.use('/api', secureRoute, calendarRouter);

app.get('/api/db', secureRoute, (req, res) => {
    console.log(req.session, 'req.session.userID');
    db.showDb().then( data => res.json(data));

});

const server = app.listen(serverConf.port, () => {
    console.log(`Server API running on port ${serverConf.port}`);
});

