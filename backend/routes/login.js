import mongoose from "mongoose";
import { User } from '../models/User';

export const get = (req, res) => {

};

export const post = (req, res, next) => {
    const { username, password } = req.body;

    res.cookie('Test', 'Hello', { domain: 'http://localhost:8085' });
    req.session.newUser = 'test cookie';
    req.session.save();


    User.findOne({ username: username }).exec()
        .then( (user) => {

            if(user){

                return user.checkPass(password).then( (result) => {

                    if (result){

                        // ... 200 OK
                        res.status(200).json({
                            meta: {
                                type: "success",
                                code: 200,
                                message: "Password is correct"
                            }
                        });
                        console.log('Pass is correct!');
                        return user;

                    } else {

                        res.status(403).json({
                            meta: {
                                type: "failure",
                                code: 403,
                                message: "Password is not correct"
                            }
                        });
                        return new Error();
                    }

                });


            } else {

                const user = new User({ username: username, password: password });
                // req.session.ourUser = user._id;

                user.save((err) => {
                    if (err) return next(err);

                    //
                    // console.log('Check sessions', res.session.newUser);
                    console.log('Headers', res.headersSent);


                    res.status(201).json({
                        meta: {
                            type: "success",
                            code: 201,
                            message: "New user was created"
                        }
                    });

                    next();

                    // console.log('New user was added', userNew._id);

                    // ... 200 OK
                });



                // return req.session.newUser = user._id;

            }

        });


    // console.log('New user', user);

};