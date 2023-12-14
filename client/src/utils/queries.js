import { gql } from '@apollo/client';

export const QUERY_USER = gql`
mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`;