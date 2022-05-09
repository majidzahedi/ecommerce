import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETONEPRODUCT } from "../../apollo/query";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/cart/cartSlice";

import Button from "../button/button.component";
import Loading from "../../components/loading/loading";
import {
  ProductContainer,
  Product,
  ProductDescription,
  Image,
} from "./ProductDescryption.styles";

const ProductDescryption = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(GETONEPRODUCT, {
    variables: { id: +id },
  });

  if (error) return <h1>Error</h1>;
  if (loading) return <Loading />;

  if (data) {
    const { name, description, imageUrl, price, sold } = data.product;

    const handleEvent = () => {
      dispatch(addCartItem(data.product));
    };
    return (
      <ProductContainer>
        <Product>
          <ProductDescription>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <p>Price: {price}</p>
            <p>People bought this product: {sold}</p>
          </ProductDescription>
          <Button onClick={handleEvent}>Add To Cart</Button>
        </Product>
        <Image src={imageUrl} alt="name" />
      </ProductContainer>
    );
  }
};

export default ProductDescryption;
