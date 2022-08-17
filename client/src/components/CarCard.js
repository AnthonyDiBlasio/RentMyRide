import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CAR } from '../utils/queries';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const CarCard= () => {
    const { loading, data } = useQuery(QUERY_CAR, {
        fetchPolicy: "no-cache"
    });

    // const [cars, setCars] = useState({

    // })
    const carList = data?.cars || [];

    return (
        
                <ul className="carlist container row"> 
                    {carList.map((car) => {
                        return (
                          
                            
                            <MDBCard>
                            <MDBCardImage src={car.image} position='top' alt='...' />
                            <MDBCardBody>
                              <MDBCardTitle>Available for Rent</MDBCardTitle>
                              <MDBCardText key={car._id}>
                               
                            
                                <span className="span">Type: {car.carType}</span><br />
                                <span className="span"> Make: {car.carMake}</span><br />
                                <span className="span"> Model: {car.carModel}</span><br />
                                <span className="span"> Year: {car.carYear}</span><br />
                                <span className="span"> Color: {car.color}</span><br />
                                <span className="span">Price per day: ${car.price}</span><br /><span></span>
                                
                                
                              </MDBCardText>
                              <MDBBtn href='#'>Book this car</MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                            


                        );
                    })}
                    
                </ul>
       
    );
};


export default CarCard;