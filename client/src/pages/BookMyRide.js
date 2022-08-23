import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { CREATE_BOOKING } from "../utils/mutations";
import { QUERY_CAR } from "../utils/queries";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
//how do we do the math for dates selected and price per day?
// what is this form going to say/do after submit

function BookMyRide() {
  let carId = window.location.href.split("/");
  const { loading, data: carsData } = useQuery(QUERY_CAR, {
    fetchPolicy: "no-cache",
  });
  const [totalBill, setTotalBill] = useState(null);
  const [formState, setFormState] = useState({
    rentedCar: carId[4],
    reservDate: "",
    returnDate: "",
    message: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formState.reservDate && formState.returnDate) {
      var reservDate = moment(formState.reservDate);
      var returnDate = moment(formState.returnDate);
      const car = carsData.cars.find(car => car._id === carId[4]);
      var days = returnDate.diff(reservDate, "days")
      setTotalBill(car.price * days)
    }
  }, [formState.reservDate, formState.returnDate, carsData]);

  const navigate = useNavigate();
  const [createBooking, { error }] = useMutation(CREATE_BOOKING);
  const onFormSubmit = async (event) => {
    event.preventDefault();
    await createBooking({
      variables: {
        ...formState,
        totalBill: parseInt(totalBill),
      },
    });
    navigate("/profile");
  };

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
                name="reservDate"
                type="date"
                value={formState.reservDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formState.returnDate}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Send a message:</Form.Label>
            <Form.Control name="message" value={formState.message} onChange={handleChange} />
          </Form.Group>
          <br />
          <Form.Group as={Col}>
            <Form.Label>Total bill</Form.Label>
            {
              totalBill ?
              <div style={{fontWeight: 'bold', fontSize: '20px'}}>${totalBill}</div> :
              <div>--</div>
            }
          </Form.Group>
          <br />
          <Button value ={formState.rentedCar}variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default BookMyRide;
