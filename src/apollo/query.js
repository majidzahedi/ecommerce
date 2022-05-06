import { gql } from "@apollo/client";

export const GETPRODUCTS = gql`
  query GetProducts($filter: String, $skip: Int, $take: Int) {
    allProducts(filter: $filter, skip: $skip, take: $take) {
      id
      name
      description
      price
      imageUrl
    }
  }
`;

export const GETCATEGORIES = gql`
  query GetCategories {
    categories
  }
`;
