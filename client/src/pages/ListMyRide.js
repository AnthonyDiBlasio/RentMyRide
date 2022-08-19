import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
const stateAbbr = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
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
              <Form.Select defaultValue="Select" name="make">
                <option></option>
                <option></option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Model</Form.Label>
              <Form.Select defaultValue="Select" name="model">
                <option></option>
                <option></option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group as={Col}>
            <Form.Label>Year</Form.Label>
            <Form.Select defaultValue="Select" name="year">
              {range(1950, 2023).map((year) => (
                <option key={year}>{year}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Select defaultValue="Select" name="color">
              {["Red", "Blue", "Black", "White", "Gray", "Green", "Yellow"].map(
                (color) => (
                  <option key={color}>{color}</option>
                )
              )}
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control name="city" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Select" name="state">
                {stateAbbr.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control name="zipcode" />
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
