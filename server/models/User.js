const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: { type: String, 
          required: true, 
          unique: true, 
          trim: true },
        lastName: { type: String, 
            required: true, 
            unique: true, 
            trim: true },
        email: {
            type: String,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {type: String, required: true},
        isOwner: {type: Boolean, required: true},
        location: {type: String , required: true}
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

// userSchema.virtual('').get(function () {
//     return 
// });

const User = model('User', userSchema);

module.exports = User;