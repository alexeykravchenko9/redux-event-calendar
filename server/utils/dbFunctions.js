// import mongoose from "mongoose";

const mongoose = require('mongoose');


import '../models/User';
import '../models/Event';

const User = mongoose.model('User');
const Event = mongoose.model('Event');

export const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/eventcalendar');
};


export const createUser = (data) => {

    const checkUser = User.findOne({ username: data.username }).exec();

    checkUser.then( (resolve) => {
        if(resolve === null){
            const user = new User({
                username: data.username,
                password:  data.password
            });

            return user.save();

        }

    });

    return checkUser;


};

export const listUsers = (id) => {

    return User.find();

};

export const createCollection = (name) => {
    const db = mongoose.connection.db;


    db.collections().then(data => {

        let item;

        if( data.every( (item) => item.s.name !== name ) ){
           db.createCollection(name).then( result => console.log('Collection created') );
        }
    });
};


export const showDb = () => {
   const db = mongoose.connection.db;
    let exportObj = {};

    return db.collections().then(data => {

       data.forEach( (item) => {

           const collection = item.s.name;

           if (collection !== 'sessions') {

               exportObj[collection] = '';

           }
       });

       return exportObj;

    }).then( data => {

        return User.find().then( result => { exportObj.users = result });

    }).then( data => {

        return Event.find().then( result => { exportObj.events = result });

    }).then( data => exportObj);


};
