import { gql } from '@apollo/client';



export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user{
        _id
        email
        name
      }  
    }
  }
`;
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user{
      _id
      name
      email
    }
  }
}
`;
export const CREATE_CAR = gql`
mutation createCar($carType: String!, $carMake: String!, $carModel: String!, $carYear: Int!, $price: Int!, $isAvailable: Boolean!, $color: String, $locationAvail: String, $checkInDate: String,$checkOutDate: String, $image: String, $carOwner: ID) {
  createCar(carType: $carType, carMake: $carMake, carModel: $carModel, carYear: $carYear, price: $price, isAvailable: $isAvailable,checkInDate: $checkInDate, checkOutDate: $checkOutDate, image: $image, color: $color, locationAvail: $locationAvail, carOwner: $carOwner) {
    _id
    carType
    carMake
    carModel
    carYear
    color
    price
    isAvailable
    locationAvail
    checkInDate
    checkOutDate
    image
    carOwner {
      _id
      name
      email
      location
    }
  }
}
`;
export const CREATE_BOOKING = gql`
mutation createBooking($rentedCar: ID,$reservDate: String, $returnDate: String, $totalBill: Int, $message: String) {
  createBooking(rentedCar: $rentedCar, reservDate: $reservDate, returnDate: $returnDate, totalBill: $totalBill, message: $message) {
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
      locationAvail
    }
    reservDate
    returnDate
    totalBill
    message
  }
}
`



