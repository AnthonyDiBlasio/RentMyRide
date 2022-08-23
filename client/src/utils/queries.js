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
  query me {
    me {
      _id
      name
      email
      location
      carsRented {
        _id
        rentedCar {
          _id 
          image
        }
      }
    }
  }
`;

export const QUERY_BOOKING = gql`
query booking {
  Booking {
 _id
 reservDate
 returnDate
 totalBill
 message
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
  carOwner
    }
  }
}
`