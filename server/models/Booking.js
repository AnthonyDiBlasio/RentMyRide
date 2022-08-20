const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');

const bookingSchema = new Schema(
    {
        rentedCar: {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        },
         
        reservDate: {
            type: String,
            required: true,
        },
        returnDate: {
            type: String,
            required: true,
        },
        totalBill: {
            type: Number,
            required: true
        },
        billingDate: {
            type: String,
            required: true
        },
        lateFee: {
            type: Number,
            default: 0,
            min: 0
        },
        
        message: {
            type: String,
            required: false,
            minLength: 1,
            maxLength : 280,
        },
    },
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;