import React ,{useState}from "react";
import CarCard from "../components/CarCard";
import { useQuery } from "@apollo/client";
import { QUERY_CAR } from "../utils/queries";
//todo add filter look at tomsturtles

const Rentals = () => {
    const { loading, data } = useQuery(QUERY_CAR, {
        fetchPolicy: "no-cache",
      });
    const cars = data?.cars || [];
    if (loading) {
      return <p>loading...</p>;
    }
      
    
  
    // {data.cars.filter((car) => {
    //     console.log(car);
    //     return <div data={car} key={car._id} />;
    //   })}


      return(
      <>
      {/* {cars.filter(car => car.carMake.includes('Audi')).map(filteredName => (
            <li>
              {filteredName}
            </li>
      ))} */}
        {cars.map(car => {
          return (<div>
            {car.carMake}
            <CarCard data={car}/>
          </div>)
        })}
        {/* <CarCard /> */}
      </>
   
  );
};

export default Rentals;
