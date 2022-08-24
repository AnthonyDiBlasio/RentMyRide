
//import the User model
const User = require('../models/User');
const assert = require('assert');
  
describe('Creating documents in MongoDB', () => {
    it('Creates a New User', (done) => {
        const newUser = new User({ 
          name: 'Turtle', 
          email: "turtle@turtle.com", 
          password: "password1234"
        });
        newUser.save() // returns a promise after some time
        .then(() => {
          //if the newUser is saved in db and it is not new
          assert(!newUser.isNew);
          done();
        });
    });
});