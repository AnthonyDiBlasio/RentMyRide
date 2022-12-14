const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

// ** See models/index.js for Model logic **
const carSchema = new Schema(
    {
        carType: { type: String, trim: true, required: true },
        carMake: { type: String, trim: true, required: true },
        carModel: {type: String, trim: true, required: true },
        carYear: { type: Number, require: true },
        color: {type: String},
        image: {
            type: String,
            // match: [/^.*\.(jpg|JPG|png|PNG)$/, 'Must upload a PNG or JPG file']
        },
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true },
        checkInDate:{type:String, default: Date},
        checkOutDate:{type:String, default: Date},
        locationAvail: {
            type: String,
        },
        // Car owner ID will not always be same as the logged in User.  Only a logged in User can create a car they will own since the the logged in User ID will be added as the ID below.  Other users when logged on will be able to see the car owners since the Car query produces all cars, along with user ID , name, email and lcation.
        // this is the person who owns car and earns money off it
        carOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
);

const Car = model('Car', carSchema);

module.exports = Car;