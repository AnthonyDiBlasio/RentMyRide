import React, { useState } from "react";
import CarCardList from "../components/CarCard";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FindMyRide = () => {
  const [carTypeFilter, setCarTypeFilter] = useState([]);
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  //create usestate hook for boolean isAvailable
  const { loading, data } = useQuery(QUERY_CAR, {
    fetchPolicy: "no-cache",
  });

  const filterCars = (cards) => {
    // look through the types of filters
    return cards
      .filter((car) => car.isAvailable)
      .filter((car) => {
        // if the car type includes a given car return true
        if (carTypeFilter.includes(car.carType)) {
          return true;
        }
        if (carTypeFilter.length === 0) {
          return true;
        }
        return false;
      });
  };

  if (loading) {
    return <p>loading...</p>;
  }
  //render form input for on change set is available true or false checkbox

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Card
          style={{
            width: "300px",
            padding: "16px",
            position: "sticky",
            top: "0",
            margin: "16px",
          }}
        >
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "30px",
              paddingBottom: "16px",
            }}
          >
            Find My Ride
          </Card.Title>

          <Form.Group as={Col} controlId="my_multiselect_field">
            <Form.Label style={{ textAlign: "left" }}>Car Type</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={carTypeFilter}
              onChange={(e) => {
                const selection = Array.from(e.target.selectedOptions).map(
                  (item) => item.value
                );
                console.log(selection);
                setCarTypeFilter(selection);
              }}
            >
              {[
                "Convertible",
                "Roadster",
                "Sedan",
                "Coupe",
                "SUV",
                "Hatchback",
              ].map((carType) => (
                <option key={carType} value={carType}>
                  {carType}
                </option>
              ))}
            </Form.Control>
            <p
              style={{
                textAlign: "left",
                fontSize: "10px",
                paddingTop: "16px",
              }}
            >
              to select multiple types hit control click
            </p>
          </Form.Group>
          <Button
            onClick={(e) => {
              setCarTypeFilter([]);
            }}
          >
            Reset Filter
          </Button>
        </Card>
      </div>
      <div className="row g-2">
        <CarCardList cars={filterCars(data.cars)} />
      </div>
    </div>
  );
};

export default FindMyRide;