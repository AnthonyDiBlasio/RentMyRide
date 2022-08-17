import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CAR } from '../utils/queries';
import { Button } from "bootstrap";

const Rentals = () => {
    const { loading, data } = useQuery(QUERY_CAR, {
        fetchPolicy: "no-cache"
    });

    // const [cars, setCars] = useState({

    // })
    const carList = data?.cars || [];

    return (
        <div className="rentContainer card bg-white card-rounded w-70">
            <div className="card-header bg-dark text-center">
                <h1>RentmyRide</h1>
            </div>
            <div className="rentCard card-body m-5">
                <h2>Get into Gear</h2>
                <ul className="carlist">
                    {carList.map((car) => {
                        return (
                            
                            <ul className="carCard card bg-white card-rounded w-60" key={car._id}>
                                <span className="span">Type: {car.carType}</span><br />
                                <span className="span"> Make: {car.carMake}</span><br />
                                <span className="span"> Model: {car.carModel}</span><br />
                                <span className="span"> Year: {car.carYear}</span><br />
                                <span className="span"> Color: {car.color}</span><br />
                                <img className ="img-fluid"src = {car.image}/>
                                <span className="span">Price per day: ${car.price}</span><br /><span><button> book this rental</button></span>
                            </ul>
                            
                            


                        );
                    })}
                </ul>
            </div>
        </div>
    );
};


export default Rentals;