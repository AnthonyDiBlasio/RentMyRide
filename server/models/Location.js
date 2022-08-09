// adding location to Booking Model



// const { ObjectId } = require('mongodb');
// const { Schema, model } = require('mongoose');

// const locationSchema = new Schema(
//     {
//         locLong: { type: Number },
//         locLang: { type: Number },
//         address: { type: String, required: true },
//         is_available: { type: Boolean, default: false },
//         car_avail: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Car'
//             }
//         ]
        
//     },
//     {
//         toJSON: {
//             virtuals: true,
//         },
//         id: false
//     }
// )

// // locationSchema.virtual('').get(function () {
// //     return 
// // });

// const Location = model('Location', locationSchema);

// module.exports = Location; 