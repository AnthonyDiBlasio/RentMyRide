const { Schema, model } = require('mongoose');

const userSchema = (
    {
        name: {type: String, required: true},
        email: {type: String , required: true},
        unique: true, 
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        Password: {},
        isOwner: {type: boolean, required: true},
        location: {type: String , required: true}    
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

userSchema.virtual('').get(function () {
    return 
});

const User = model('User', userSchema);

module.exports = User;