import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const SIGNUP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export { LOGIN, SIGNUP };
