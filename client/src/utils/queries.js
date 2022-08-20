import { gql } from "@apollo/client";

// export const QUERY_BOOKING = gql`
//   query Booking {
//     Booking {
//       _id
//       reservDate
//       returnDate
//       totalBill
//       billingDate
//       lateFee
//       message
//       rentedCar{
//         _id
//       }
//   }
// `;

export const QUERY_CAR = gql`
  query car {
    cars {
      _id
      carType
      carMake
      carModel
      carYear
      color
      image
      price
      isAvailable
      locationAvail
      carOwner {
        _id
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
export const QUERY_USER = gql`
type Query {
  users: [User]

  
}`