const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');
// in order for users to book/rent a car, we need db for users to fill up their infos
// their desired car, as well as when will it be out and in for the return,
// this schema can be used to store db for every rentals made on the website via booking form

// note: have rental dates be here instead to make things easier instead of jam packing the Car model
// maybe have a delivery fees that goes to set whether 'willPickUp' be true or false? that could be added to final 'totalBill'
const bookingSchema = new Schema(
    {
        carOwnedBy: {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        },
        userRented: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
        // have an optional message field for extra details of the, exact location, etc.
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