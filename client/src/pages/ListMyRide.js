import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from '@apollo/client';
// Import the GraphQL mutation
import { CREATE_CAR } from '../utils/mutations';


function ListMyRide() {
  const [createCar, { error }] = useMutation(CREATE_CAR);

  const handleForm = async function(e) {  
    e.preventDefault();
    console.log('E ===>', e)
    const { make, model, type, year, color, price,address, image } = e.target.elements;
    console.log('make ====>',make.value)
    console.log('model ====>',model.value)
    console.log('type ====>',type.value)
    console.log('year ====>',year.value)
    console.log('color ====>',color.value)
    console.log('price ====>',price.value)
    console.log('city ====>',address.value)
    
    console.log('image ====>', image.value)
    try {
      const { data } = await createCar({
        variables: { carType: type.value,
                     carMake: make.value,
                     carModel: model.value,
                     carYear: year.value,
                     color: color.value,
                     price: price.value,
                     locationAvail: address.value},
                   
      });
      // you don't have to do a reload!!! if you design using proper App states
      window.location.reload();
    } catch ({error}) {
      console.error({error});
    }

  }
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

          {/* <Row className="mb-3">
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
          </Row> */}
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
