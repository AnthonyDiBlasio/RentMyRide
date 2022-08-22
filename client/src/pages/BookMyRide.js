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
  const [reserveDate, setReserveDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  // define handler change function on check-in date
  const handleReserveDate = (date) => {
    setReserveDate(date);
    setReturnDate(null);
  };

  // define handler change function on check-out date
  const handleReturnDate = (date) => {
    setReturnDate(date);
  };
  const navigate = useNavigate();
  const [createBooking, { error }] = useMutation(CREATE_BOOKING);
  const handleForm = async function (e) {
    e.preventDefault();
    const { car_id, bill, dateReserve, message, dateReturn } =
      e.target.elements;
    try {
      const { data } = await createBooking({
        variables: {
          rentedCar: car_id.value,
          reservDate: dateReserve.value,
          returnDate: dateReturn.value,
          totalBill: parseInt(bill.value),
          message: message.value,
        },
      });
    } catch ({ e }) {
      console.error({ error });
    }
    //temporary path; move line above catch error when handlesubmit works
    navigate("/booked-rental-success");
  };
  return (
    <div className="container-fluid" style={{ paddingTop: "16px" }}>
      <Card style={{ width: "50rem", padding: "16px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          Book Your Ride
        </Card.Title>
        <Form onSubmit={handleForm}>
          <Form.Group>
            <div>
              <label>Reserve dates:</label>
              <DatePicker
                name="dateReserve"
                selected={reserveDate}
                minDate={new Date()}
                onChange={handleReserveDate}
              />
            </div>

            <div>
              <label>Return Date</label>
              <DatePicker
                name="dateReturn"
                selected={returnDate}
                minDate={reserveDate}
                onChange={handleReturnDate}
              />
            </div>
          </Form.Group>
          {reserveDate && returnDate && (
            <div className="container">
              <br />
              <p>
                You are renting a ride from {moment(reserveDate).format("LL")}{" "}
                to {moment(returnDate).format("LL")}.
              </p>
            </div>
          )}

          <Form.Group as={Col}>
            <Form.Label>Send a message:</Form.Label>
            <Form.Control name="message" />
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
