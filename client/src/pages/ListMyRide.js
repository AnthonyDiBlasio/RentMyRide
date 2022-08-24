import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
// Import the GraphQL mutation
import { CREATE_CAR } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

function ListMyRide() {
  const navigate = useNavigate();
  const [createCar, { error }] = useMutation(CREATE_CAR);

  const handleForm = async function (e) {
    e.preventDefault();
    const { make, model, type, year, color, price, address, image } =
      e.target.elements;
    try {
      const { data } = await createCar({
        variables: {
          carType: type.value,
          carMake: make.value,
          carModel: model.value,
          carYear: parseInt(year.value),
          color: color.value,
          price: parseInt(price.value),
          isAvailable: true,
          locationAvail: address.value,
          image: image.value,
        },
      });
    } catch ({ e }) {
      console.error({ error });
    }
    //temporary path to success page; move line above catch when handlesubmit is working
    navigate("/created-listing-success");
  };
  return (
    <div className="container-fluid" style={{ paddingTop: "50px", paddingBottom: "50px", color: "#823329" }}>
      <Card style={{ width: "50rem", padding: "50px" }}>
        <Card.Title className="fw-bold" style={{ textAlign: "center", fontSize: "30px" }}>
          List Your Ride
        </Card.Title>
        <Form className="p-5" onSubmit={handleForm}>
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

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control name="address" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Image URL</Form.Label>
              <Form.Control name="image" />
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default ListMyRide;