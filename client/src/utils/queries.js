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
    }
  }
`;
// export const QUERY_USER = gql`
// type Query {
//   users: [User]


// }`
export const QUERY_BOOKING = gql`
query booking {
  Booking {
 _id
 reservDate
 returnDate
 totalBill
 billingDate
 lateFee
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