import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CAR } from '../utils/queries';

const Rentals = () => {
    const { loading, data } = useQuery(QUERY_CAR, {
        fetchPolicy: "no-cache"
    });

    // const [cars, setCars] = useState({

    // })
    const carList = data?.cars || [];

    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">
            <h1>Car List</h1>
            </div>
            <div className="card-body m-5">
            <h2>Here is a list of cars on this website:</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul className="square">
                {carList.map((car) => {
                    return (
                    <li key={car._id}>
                    <span>{car.carType}</span><br />
                    <span>{car.carMake}</span><br />
                    <span>{car.carModel}</span><br />
                    <span>{car.carYear}</span><br />
                    <span>{car.color}</span><br />
                    <span>{car.price}</span><br />
                    </li>
                    );
                })}
                </ul>
            )}
            </div>
        </div>
    );
};


export default Rentals;