import React, { useState } from "react";
import CarCardList from "../components/CarCard";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FindMyRide = () => {
  const [carTypeFilter, setCarTypeFilter] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
    <div>
      <h1>Find My Ride</h1>
      <Form.Group as={Col} controlId="my_multiselect_field">
        <Form.Label>Desired Car Type</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={carTypeFilter}
          onChange={(e) => {
            const selection = Array.from(e.target.selectedOptions).map(
              (item) => item.value
            );
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
      </Form.Group>
      <Form.Label>Start date:</Form.Label>
      <Form.Control
        type="date"
        name="startDate"
        onChange={(e) => {
          setStartDate(e.target.value);
        }}
      />
      <Form.Label>End date:</Form.Label>
      <Form.Control
        type="date"
        name="endDate"
        onChange={(e) => {
          setEndDate(e.target.value);
        }}
      />

      <Button
        variant="primary"
        onClick={() => {
          console.log(
            "TODO! This onclick event should query backend for cars that match the date range"
          );
          console.log(startDate, endDate);
        }}
      >
        Search
      </Button>
      <CarCardList cars={filterCars(data.cars)} />
    </div>
  );
};

export default FindMyRide;
