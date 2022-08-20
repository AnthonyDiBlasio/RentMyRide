import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";


function ListMyRide() {
  return (
    <div className="container-fluid">
      <Card style={{ width: "50rem", padding: "16px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
          List Your Ride
        </Card.Title>
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
