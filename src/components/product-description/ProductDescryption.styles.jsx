import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  padding: 24px;
  border-radius: 10px;
  height: 600px;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 400px;
  height: 400px;
  align-self: center;

  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 300px;
    height: 300px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
export const ProductDescription = styled.div``;
