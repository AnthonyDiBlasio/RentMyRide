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

function BookMyRide() {
  let carId = window.location.href.split("/");
  const { loading, data: carsData } = useQuery(QUERY_CAR, {
    fetchPolicy: "no-cache",
  });
  const [car , setCar] = useState(null)
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
    const car = carsData?.cars.find(car => car._id === carId[4]);
    setCar(car)
    if (formState.reservDate && formState.returnDate) {
      var reservDate = moment(formState.reservDate);
      var returnDate = moment(formState.returnDate);
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
    <div className="container-fluid" style={{ paddingTop: "50px", paddingBottom: "50px", color: "#823329" }}>
      <Card style={{ width: "50rem", padding: "16px" }}>
        <Card.Title className="mb-4" style={{ textAlign: "center", fontSize: "30px" }}>
          Book Your Ride
        </Card.Title>
        <div className="row">
          
        
        <div className="col-lg-6 col-xl-12">
          <div className="text-center">
            { car &&
            <Card style={{ width: '18rem', padding:0 }} key={car._id}>
              <Card.Img variant="top" src={car.image} title={car.carMake} alt={car.carMake} />
              <Card.Body className="text-center">
                <Card.Title>{ car.carMake }</Card.Title>
                <Card.Text>
                  <div>{ car.carModel }</div>
                  <div>{ car.carType }</div>
                  <div><b>{ car.carYear }</b></div> 
                </Card.Text>
              </Card.Body>
            </Card>
            }
          </div>
        </div>

        <div className="col-lg-6 col-xl-12">
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mx-4">
                <div>
                  <label>Reserve date</label>
                  <input
                    name="reservDate"
                    className="form-control "
                    type="date"
                    value={formState.reservDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Return date</label>
                  <input
                    type="date"
                    name="returnDate"
                    className="form-control"
                    value={formState.returnDate}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} className="mx-4" >
                <Form.Label>Send a message:</Form.Label>
                <Form.Control className="form-control" name="message" value={formState.message} onChange={handleChange} />
              </Form.Group>
              <br />
              <Form.Group as={Col} className="mx-4 text-end">
                <Form.Label>Total bill</Form.Label>
                {
                  totalBill ?
                  <div style={{fontWeight: 'bold', fontSize: '20px'}}>${totalBill}</div> :
                  <div>--</div>
                }
              </Form.Group>
              <br />
              <div className="d-flex justify-content-end">
              <Button className="m-4" value ={formState.rentedCar}variant="primary" type="submit">
                Submit
              </Button>
              </div>
            </Form>
          </div>
      </div>
      </Card>
    </div>
  );
}

export default BookMyRide;
