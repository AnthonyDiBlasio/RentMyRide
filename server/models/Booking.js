const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');
// in order for users to book/rent a car, we need db for users to fill up their infos
// their desired car, as well as when will it be out and in for the return,
// this schema can be used to store db for every rentals made on the website via booking form

// note: have rental dates be here instead to make things easier instead of jam packing the Car model
// maybe have a delivery fees that goes to set whether 'willPickUp' be true or false? that could be added to final 'totalBill'
const bookingSchema = new Schema(
    {
        user_owned: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        user_rented: 
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        // car: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Car',
        // },
        reservDate: {
            type: Date,
            default: Date.now,
            required: true,
        },
        returnDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        totalBill: {
            type: Number,
            required: true
        },
        // amount: {
        //     type: Number,
        //     min: 0,
        // },
        billingDate: {
            type: Date,
            default: Date.now,
        },
        lateFee: {
            type: Number,
            min: 0,
        },
        // have an optional message field for extra details of the, exact location, etc.
        message: {
            type: String,
            required: false,
            minLength: 1,
            maxLength : 280,
        },
        // when was this transaction made
        bookingCreated: {
            type: Date,
            default: Date.now,
        },
        // pickUp: {
        //     type: Boolean,
        //     required: true,
        // },
        // address: {
        //     type: String,
        //         equired: true,
        // },
    },
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;