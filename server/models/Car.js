const { ObjectId } = require('mongodb');
const { Schema, model } = require('mongoose');

const carSchema = new Schema(
    {
        carType: { type: String, trim: true, required: true },
        carMake: { type: String, trim: true, required: true },
        carModel: {type: String, trim: true, required: true },
        carYear: { type: Number, require: true },
        color: {type: String},
        image: {type: String},
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: false },
        
        locationAvail: {
                type: String,
        },
        carOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
);

const Car = model('Car', carSchema);

module.exports = Car;