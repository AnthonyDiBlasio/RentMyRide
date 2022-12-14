const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');

// ** See models/index.js for Model logic **
const bookingSchema = new Schema(
    {
        // When user clicks on a car Card in React page, the event should produce the Caar ID and add that ID to the rentedCar field. See Car Model
        rentedCar: {
            type: Schema.Types.ObjectId,
            ref: 'Car'
        },
        // Dates have to be entered as a string.  If using the Date method on the form handler, the Date will have to be converted into a string.
        reservDate: {
            type: String,
            required: false,
        },
        returnDate: {
            type: String,
            required: false,
        },
        totalBill: {
            type: Number,
            required: false,
        },


        // billingDate: {
        //     type: String,
        //     required: true
        // },
        // lateFee: {
        //     type: Number,
        //     default: 0,
        //     min: 0
        // },
        
        message: {
            type: String,
            required: false,
            minLength: 1,
            maxLength : 280,
        },
        status: {
            type: Number,
            required: true,
            default: 1,
            // 1 = reserved, 
            // 2 = reserved and in use,
            // 3 = returned,
            //4 = canceled
        }
    },
);

const Booking = model('Booking', bookingSchema);

module.exports = Booking;