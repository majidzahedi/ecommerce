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
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 400px;
  height: 400px;
  align-self: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;
export const ProductDescription = styled.div``;
