
import { User } from '../models/User';

export const signOut = (req, res, next) => {
    req.session.destroy();
    res.cookie('authstat', '0').send(200);
    console.log(req.session, 'req.session');
};

export const signIn = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({ username: username }).exec()
        .then( (user) => {

            if(user){

                return user.checkPass(password).then( result => {

                    if (result){
                        const { id, username } = user;

                        req.session.userID = { id, username };
                        req.session.save();

                        res.cookie('authstat', '1');
                        res.status(200).json({
                            user: user,
                            meta: {
                                type: "success",
                                code: 200,
                                message: "Password is correct"
                            },

                        });



                        return user;

                    } else {

                        res.status(403).json({
                            meta: {
                                type: "failure",
                                code: 403,
                                message: "Password or Login is not correct"
                            }
                        });
                        return new Error();
                    }

                });


            } else {

                const user = new User({ username: username, password: password });


                user.save((err) => {
                    if (err) return next(err);

                    req.session.userID = user.id;
                    req.session.save();
                    res.cookie('authstat', '1');
                    res.status(201).json({
                        user,
                        meta: {
                            type: "success",
                            code: 201,
                            message: "New user was created"
                        }
                    });

                    next();

                });


            }

        });


};