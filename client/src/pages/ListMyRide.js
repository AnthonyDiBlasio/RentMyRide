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
          checkInDate: '10/20/2020',
          checkOutDate: '10/20/2020',
          price: parseInt(price.value),
          isAvailable: true,
          locationAvail: address.value
        }
      });
      // you don't have to do a reload!!! if you design using proper App states
      navigate("/");
    } catch ({ e }) {
      console.error({ error });
    }
  };
  return (
    <div className="container-fluid">
      <Card style={{ width: "50rem", padding: "16px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          List Your Ride
        </Card.Title>
        <Form onSubmit={handleForm}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default ListMyRide;

// export default function ListMyRide() {
//   return (

//     <form>
//       <label>
//         Enter Your Cars Make
//         <input type="text" name="make" />
//       </label>
//       <label>
//         Enter Your Cars Model
//         <input type="text" name="model" />
//       </label>
//       <label>
//         Enter Your Cars Year
//         <input type="text" name="year" />
//       </label>
//       <label>
//         Enter Your Cars Color
//         <input type="text" name="color" />
//       </label>
//       <label>
//         Enter Your location
//         <input type="text" name="location" />
//       </label>
//       <label>
//         Enter a url link to photos of your car
//         <input type="text" name="image" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
