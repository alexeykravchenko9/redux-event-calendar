import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});


UserSchema.pre('save', function (next) {
        let user = this;

        if(!user.isModified('password')) return next();

        bcrypt.hash(user.password, saltRounds, function (err, hash) {
            if (err) return next(err);

            user.password = hash;

            next();
        });

});



UserSchema.methods.checkPass = function (password) {

    return bcrypt.compare(password, this.password).then(function(res) {
        return res;
    });

};


export const User = mongoose.model('User', UserSchema);
