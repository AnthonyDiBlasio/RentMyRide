import { gql } from "@apollo/client";



export const QUERY_CAR = gql`
  query car {
    cars {
      _id
      carType
      carMake
      carModel
      carYear
      color
      checkInDate
      checkOutDate
      image
      price
      isAvailable
      locationAvail
      carOwner {
        _id
        name
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      email
    }
  }
`;
export const QUERY_ME = gql`
query Me {
  me {
    _id
    name
    email
    location
    carsRented {
      _id
      rentedCar {
        _id
        carType
        carMake
        carModel
        carYear
        color
        price
        image
        isAvailable
      }
    }
    
  }
}
`;

export const QUERY_BOOKING = gql`
query Booking {
  booking {
    _id
    reservDate
    returnDate
    rentedCar {
      _id
      carType
      carMake
      carModel
      carYear
      color
      price
      image
      isAvailable
      locationAvail
      carOwner {
        _id
        name
        email
        location
      }
    }
  }
}`