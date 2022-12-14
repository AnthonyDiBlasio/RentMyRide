
const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 7;

// ** See models/index.js for Model logic **
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            match: [/[a-zA-Z0-9!-]+/i, "Must use a-z or 0-9 or ! or -"],
        },

        //  When User is logged in and complete a Booking form, data will then be added to this array to show what cars they have served.  See Booking model.
        carsRented: [
            {
                type: Schema.Types.ObjectId,
                ref : 'Booking',
            },
        ],
        // credits: {type: Number}, // payment field

        // array of how many cars does a user put up for rent. they won't be able to rent these
        // carOwned: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Car',
        //     }
        // ],
        location: {type: String , required: false}
    },
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
  
userSchema.methods.comparePassword = async function(candidatePassword, cb) {
try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        console.log(err);
        return false;
    }
};

const User = model('User', userSchema);

module.exports = User;