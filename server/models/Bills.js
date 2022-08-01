const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongodb');

// manages user's bills and count calculate late fees purpose
const billsSchema = new Schema(
    {
        booking_id: [
            {
                type: Schema.Types.ObjectId,
                ref : 'Booking',
            }
        ],
        amount: {
            type: Number,
            min: 0,
        },
        billing_date: {
            type: Date,
            default: Date.now,
        },
        late_fee: {
            type: Number,
            min: 0,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

const Bills = model('Bills', billsSchema);

module.exports = Bills;