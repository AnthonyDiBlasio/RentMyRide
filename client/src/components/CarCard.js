import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";

function CarCard({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      style={{
        minHeight: "350px",
        width: "400px",
        padding: "20px",
        margin: "15px",
      }}
    >
      <Card.Img
        style={{ height: "250px", width: "auto" }}
        variant="top"
        src={data.image || "http://placekitten.com/250/250"}
      />

      <Card.Body>
        <Card.Title>Available {data.isAvailable}</Card.Title>

        <div>
          <p>Price per day: ${data.price}</p>
          <p>Location: {data.locationAvail}</p>
        </div>

        <p onClick={() => setOpen(!open)} aria-expanded={open}>
          more info...
        </p>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <p>Owned by: {data.carOwner}</p>
            <p>Type: {data.carType}</p>
            <p>Make: {data.carMake}</p>
            <p>Model: {data.carModel}</p>
            <p>Year: {data.carYear}</p>
            <p>Color: {data.color}</p>
          </div>
        </Collapse>

        <Button variant="primary">Book This Ride</Button>
      </Card.Body>
    </Card>
  );
}
export default function CarCardList() {
  const { loading, data } = useQuery(QUERY_CAR, {
    fetchPolicy: "no-cache",
  });
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <Container>
      <Row>
        {data.cars.map((car) => {
          return <CarCard data={car} key={car._id} />;
        })}
      </Row>
    </Container>
  );
}

// const CarCard = () => {
//   const { loading, data } = useQuery(QUERY_CAR, {
//     fetchPolicy: "no-cache",
//   });

//   // const [cars, setCars] = useState({

//   // })
//   const carList = data?.cars || [];

//   return (
//     <ul className="carlist container row">
//       {carList.map((car) => {
//         return (
//           <MDBCard>
//             <MDBCardImage src={car.image} position="top" alt="..." />
//             <MDBCardBody>
//               <MDBCardTitle>Available for Rent {car.isAvailable}</MDBCardTitle>
//               <MDBCardText key={car._id}>
//                 <span className="span">Owned by: {car.carOwner}</span>
//                 <br />
//                 <span className="span">Location: {car.locationAvail}</span>
//                 <br />
//                 <span className="span"> Type: {car.carType}</span>
//                 <br />
//                 <span className="span"> Make: {car.carMake}</span>
//                 <br />
//                 <span className="span"> Model: {car.carModel}</span>
//                 <br />
//                 <span className="span"> Year: {car.carYear}</span>
//                 <br />
//                 <span className="span"> Color: {car.color}</span>
//                 <br />
//                 <span className="span">Price per day: ${car.price}</span>
//                 <br />
//                 <span></span>
//               </MDBCardText>
//               <MDBBtn href="#">Book this car</MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//         );
//       })}
//     </ul>
//   );
// };

// export default CarCard;
