import React from "react";
import Card from "react-bootstrap/Card";

function BookedRentalSuccess() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Success!</Card.Title>

          <Card.Text>Your ride has been booked.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookedRentalSuccess;
