import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
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
