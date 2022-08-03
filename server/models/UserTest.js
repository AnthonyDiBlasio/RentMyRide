const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');
const { schema } = require('./User');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 7;

const userSchema = new Schema(
    {
        first_name: { type: String, 
          required: true,  
          trim: true },
        last_name: { type: String, 
            required: true, 
            trim: true },
        email: {
            type: String,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {type: String, required: true},
        is_owner: {type: Boolean, required: false, default: false},
        location: {type: String , required: false}
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

// TODO hooks for password updates
// add bcrypt password hashing
// ref Um turtle vacation ideas in UPENN repo
// userTestSchema.pre('save', (...args) => {
//     console.log(args);

//     next();
// })

const UserTest = model('UserTest', userTestSchema);

module.exports = UserTest;