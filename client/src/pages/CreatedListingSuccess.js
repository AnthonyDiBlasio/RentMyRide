import React from "react";
import Card from "react-bootstrap/Card";

function CreatedListingSuccess() {
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

          <Card.Text>You've added a new ride.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreatedListingSuccess;
