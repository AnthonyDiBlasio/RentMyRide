import { gql } from '@apollo/client';

export const QUERY_BOOKING = gql`
  query booking {
    booking {
    _id
    carOwnedBy
    userRented
    reservDate
    returnDate
    totalBill
    billingDate
    lateFee
    message
  }
`;

export const QUERY_CAR = gql`
  query car {
    car {
      _id
      carType
      carMake
      carModel
      carYear
      color
      image
      price
      isAvailable 
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
