import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { CREATE_BOOKING } from "../utils/mutations";
import { useNavigate } from "react-router-dom";
//how do we do the math for dates selected and price per day?
// what is this form going to say/do after submit

function BookMyRide() {
  // const [reserveDate, setReserveDate] = useState(null);
  // const [returnDate, setReturnDate] = useState(null);
  console.log(window.location.href)
  let carId = window.location.href.split('/')
  console.log(carId[4])
  // define handler change function on check-in date
  // const handleReserveDate = (date) => {
  //   setReserveDate(date);
  //   setReturnDate(null);
  // };
  const [formState, setFormState] = useState({
    rentedCar: carId[4],
    reservDate: "",
    returnDate: "",
    totalBill: "",
    message: ""
  });

  // const handleReturnDate = (date) => {
  //   setReturnDate(date);
  // };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const [createBooking, { error }] = useMutation(CREATE_BOOKING);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    await createBooking(formState);
  }
  // const handleForm = async function (e) {
  //   e.preventDefault();
  //   const { car_id, bill, dateReserve, message, dateReturn } =
  //     e.target.elements;

  // console.log(e.target.elements)
  // compare 2 dates to determine # of days rented and multiply by price for total bill -> parseInt
  // bill = (getDifferenceInDays(dateReserve, dateReturn)) * price
  // try {

  //   const { data } = await createBooking({


  return (
    <div className="container-fluid" style={{ paddingTop: "16px" }}>

      <Card style={{ width: "50rem", padding: "16px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          Book Your Ride
        </Card.Title>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <div>
              <label>Reserve dates:</label>
              <input
                name='reservDate'
                value={formState.reservDate}
               
               
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Return Date</label>
              <input
                name='returnDate'
                value={formState.returnDate}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          {/* {reserveDate && returnDate && (
            <div className="container">
              <br />
              <p>
                You are renting a ride from {moment(reserveDate).format("LL")}{" "}
                to {moment(returnDate).format("LL")}.
              </p>
            </div>
          )} */}

          <Form.Group as={Col}>
            <Form.Label>Send a message:</Form.Label>
            <Form.Control onChange={handleChange} name='message' value={formState.message} />
          </Form.Group>
          <br />
          <Form.Group as={Col}>
            <Form.Label>total bill</Form.Label>
            <Form.Control
              name='totalBill'
              onChange={handleChange} value={formState.totalBill} />
          </Form.Group>
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default BookMyRide;
