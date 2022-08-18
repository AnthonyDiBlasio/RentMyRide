import React from "react";
import CarCard from "../components/CarCard";
//todo add filter look at tomsturtles

const Rentals = () => {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <CarCard />
    </>
  );
};

export default Rentals;
