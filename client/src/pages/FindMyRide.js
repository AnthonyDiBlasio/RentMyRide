import React, { useState } from "react";
import CarCardList from "../components/CarCard";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FindMyRide = () => {
  const [carTypeFilter, setCarTypeFilter] = useState([]);
  const { loading, data } = useQuery(QUERY_CAR, {
    fetchPolicy: "no-cache",
  });

  const filterCars = (cards) => {
    // look through the types of filters
    return cards.filter((car) => {
      // if the car type includes a given car return true
      if (carTypeFilter.includes(car.carType)) {
        return true;
      }
      if (carTypeFilter.length === 0) {
        return true;
      }
    });
  };

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>Find My Ride</h1>
      
      <Form.Group as={Col} controlId="my_multiselect_field">
        <Form.Label>My multiselect</Form.Label>
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
            <option key={carType} value={carType}>{carType}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <CarCardList cars={filterCars(data.cars)} />
    </div>
  );
};

export default FindMyRide;
