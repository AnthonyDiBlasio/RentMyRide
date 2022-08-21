import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";

export function CarCard({ data }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
        <Card.Title style={{ textAlign: "right" }}>
          <h3> {data.isAvailable ? "Available" : "Not Available"}</h3>
        </Card.Title>

        <div>
          <p>Price per day: ${data.price}</p>
        </div>

        <p
          style={{ color: "maroon" }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          more info...
        </p>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <p>Make: {data.carMake}</p>
            <p>Model: {data.carModel}</p>
            <p>Year: {data.carYear}</p>
            <p>Type: {data.carType}</p>
            <p>Color: {data.color}</p>
            <p>Location: {data.locationAvail}</p>
            <p>Owned by: {data.carOwner}</p>
            <p>Dates Available: {data.checkInDate}-</p><span>{data.checkOutDate}</span>
            
          </div>
        </Collapse>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button variant="primary" onClick={() => navigate("/book-my-ride")}>
            Book This Ride
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function CarCardList({ cars }) {
  return (
    <Container>
      <Row>
        {cars.map((car) => {
          return <CarCard data={car} key={car._id} />;
        })}
      </Row>
    </Container>
  );
}
