import { gql } from '@apollo/client';



export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
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


