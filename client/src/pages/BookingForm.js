import { useLogin } from "../context/UserContext";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Auth from "../utils/auth";
import { CREATE_BOOKING } from "../utils/mutations";
const BookingForm = ({bookingId}) => {
  //pulling in UserContext data

    const [booking, setBooking] = useState('');
  
    const [createBooking, { error }] = useMutation(CREATE_BOOKING);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const data = await createBooking({
          variables: { bookingId,  rentedCar,
          reservDate,
          returnDate,
          totalBill,
          billingDate,
          lateFee,
          message  },
        });
  
        setBooking('');
      } catch (err) {
        console.error(err);
      }
    };
  

  const [formState, setFormState] = useState({
   rentedCar: "",
    reservDate: "",
    returnDate: "",
    totalBill: "",
    billingDate: "",
    lateFee: "",
    message: ""
  });
  
    return (
      <div>
        <h4>Book Your Ride</h4>
  
        {Auth.loggedIn() ? (
           <Form>
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>Make</Form.Label>
               <Form.Control name="make" />
             </Form.Group>
 
             <Form.Group as={Col}>
               <Form.Label>Model</Form.Label>
               <Form.Control name="model" />
             </Form.Group>
           </Row>
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>Type</Form.Label>
               <Form.Control name="type" />
             </Form.Group>
             <Form.Group as={Col}>
               <Form.Label>Year</Form.Label>
               <Form.Control name="year" />
             </Form.Group>
           </Row>
           <Form.Group className="mb-3">
             <Form.Label>Color</Form.Label>
             <Form.Control name="color" />
           </Form.Group>
 
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>City</Form.Label>
               <Form.Control name="city" />
             </Form.Group>
 
             <Form.Group as={Col}>
               <Form.Label>State</Form.Label>
               <Form.Control name="state" />
             </Form.Group>
 
             <Form.Group as={Col}>
               <Form.Label>Zipcode</Form.Label>
               <Form.Control name="zipcode" />
             </Form.Group>
           </Row>
           <Row className="mb-3">
             <Form.Group as={Col}>
               <Form.Label>Image URL</Form.Label>
               <Form.Control name="image" />
             </Form.Group>
           </Row>
           <Button variant="primary" type="submit">
             Submit
           </Button>
         </Form>
        ) : (
          <p>
            You need to be logged in to endorse skills. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    );
  };
  
  export default BookingForm;
  

