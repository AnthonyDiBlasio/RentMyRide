const User = require('./User');
const Car = require('./Car');

const Booking = require('./Booking');


module.exports = { User, Car, Booking };

// ** MODEL LOGIC **

// USER MODEL
// A user will login or sign up.  Once the User logs in the will be able to see an array of cars to choose from that they can Book.   Once the Booking button is clicked, it opens a Booking form that takes data from the Booking model

// BOOKING MODEL
// The Booking model gets the car ID from the event.target associated with the Car Card a user hose to book.  The Car ID is added to the Booking model under 'rentedCar'.  Other data is then added via input fields on the morm.  Once user hits submit, ane Booking is created along with a Booking ID.  That ID is then added to the USer Model fiels 'carsRented' for that logged in user.

// CAR MODEL
// The car model taakes in data via input form.  The 'carOWner' field is assocaited with the logged in user creating a new car.  This means that any car created car a logged in User adds automatically adds them as an owner.  If a different user logs in and queries all the cars, the car owner's info will populate as well for the associated User ID.