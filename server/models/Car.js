const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const carSchema = new Schema(
    {
        carId: { Type: String, required: true},
        carType: { type: String, trim: true, required: true },
        carMake: { type: String, trim: true, required: true },
        carModel: {type: String, trim: true, required: true },
        carYear: { type: Number, require: true },
        color: {type: String},
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: false },
        // reserveDate: { type: Date, required: true },
        // returnDate: { type: Date, required: true },
        // How are we using this field?  Sort Cars by area?
        locationAvail: {
                type: String,
        },
        userRented: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        ownedBy: {
                type: Schema.Types.ObjectId,
                ref: 'User'
        }
    },
)

// carSchema.virtual('').get(function () {
//     return 
// });

const Car = model('Car', carSchema);

module.exports = Car;