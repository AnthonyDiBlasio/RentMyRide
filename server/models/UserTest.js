const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');
const { schema } = require('./User');


const userTestSchema = new Schema(
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
            required: true,
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String, 
            required: true,

        }
        // is_owner: {type: Boolean, required: false, default: false},
        // location: {type: String , required: false}
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

// TODO hooks for password updates
userTestSchema.pre('save', (...args) => {
    console.log(args);
    next();
})

const UserTest = model('UserTest', userTestSchema);

module.exports = UserTest;