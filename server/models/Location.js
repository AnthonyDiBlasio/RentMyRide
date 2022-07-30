const { Schema, model } = require('mongoose');

const locationSchema = (
    {
        locLong: { type: Number },
        locLang: { type: Number },
        address: { type: String, required: true },
        isAvailable: { type: Boolean, default: false },
        carAvail: [
            {
                type: Schema.Types.ObjecctId,
                ref: 'Car'
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

locationSchema.virtual('').get(function () {
    return 
});

const Location = model('Location', locationSchema);

module.exports = Location; 