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
            <h1>RentmyRide</h1>
            </div>
            <div className="card-body m-5">
            <h2>Get into Gear</h2>
                <ul className="">
                {carList.map((car) => {
                    return (
                    <li className="card" key={car._id}>
                    <span>Type: {car.carType}</span><br />
                    <span> Make: {car.carMake}</span><br />
                    <span> Model: {car.carModel}</span><br />
                    <span> Year: {car.carYear}</span><br />
                    <span> Color: {car.color}</span><br />
                    <span> Image: {car.image}</span><br />

                    <span>Price per day: ${car.price}</span><br />
                    </li>
                    
                    );
                })}
                </ul>
            )
            </div>
        </div>
    );
};


export default Rentals;