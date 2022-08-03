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
);

userSchema.pre('save', function(next) {
    var user = this;
    console.log({hookThis: user});
  
    if (!user.isModified('password')) return next();
  
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
  
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
  });
  
  userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
  };

// userSchema.virtual('').get(function () {
//     return 
// });

const User = model('User', userSchema);

module.exports = User;