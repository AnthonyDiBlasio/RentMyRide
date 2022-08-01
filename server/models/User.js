const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

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

// userSchema.virtual('').get(function () {
//     return 
// });

const User = model('User', userSchema);

module.exports = User;