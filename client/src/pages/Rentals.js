import React ,{useState}from "react";
import CarCard from "../components/CarCard";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
//todo add filter look at tomsturtles

const Rentals = () => {
    const { loading, data } = useQuery(QUERY_CAR, {
        fetchPolicy: "no-cache",
      });
      if (loading) {
        return <p>loading...</p>;
      }

    
  
    {data.cars.filter((car) => {
        console.log(car);
        return <div data={car} key={car._id} />;
      })}
      return(
    <>
     

      <CarCard />
</>
   
  );
};

export default Rentals;
