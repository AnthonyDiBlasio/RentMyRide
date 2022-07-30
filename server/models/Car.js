const { Schema, model } = require('mongoose');

const carSchema = (
    {
        carType: { type: String, trim: true, required: true },
        carMake: { type: String, trim: true, required: true },
        carModel: {type: String, trim: true, required: true },
        carYear: { type: Number, require: true },
        color: {type: String},
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: false },
        reserveDate: { type: Date, required: true },
        returnDate: { type: Date, required: true },
        locationAvail: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Location'
            },
        ],
        userRented: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

carSchema.virtual('').get(function () {
    return 
});

const Car = model('Car', carSchema);

module.exports = Car;