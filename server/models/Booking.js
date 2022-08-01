const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');
// in order for users to book/rent a car, we need db for users to fill up their infos
// their desired car, as well as when will it be out and in for the return,
// this schema can be used to store db for every rentals made on the website via booking form

// note: have rental dates be here instead to make things easier instead of jam packing the Car model
// maybe have a delivery fees that goes to set whether 'willPickUp' be true or false? that could be added to final 'totalBill'
const bookingSchema = new Schema(
    {
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        cars: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Car',
            },
        ],
        reserve_date: {
            type: Date,
            default: Date.now,
            required: true,
        },
        return_date: {
            type: Date,
            required: true,
            default: Date.now,
        },
        total_bill: {
            type: Schema.Types.ObjectId,
            ref : 'Bills',
        },
        // have an optional message field for extra details of the, exact location, etc.
        message: {
            type: String,
            required: false,
            minLength: 1,
            maxLength : 280,
        },
        // when was this transaction made
        booking_created: {
            type: Date,
            default: Date.now,
        },
        pick_up: {
            type: Boolean,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;