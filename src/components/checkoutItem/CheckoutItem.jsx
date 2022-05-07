import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from "../../features/cart/cartSlice";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
  Arrow,
} from "./CheckoutItem.styles";

const handlers = (item) => {
  const dispatch = useDispatch();
  return {
    addItem: () => dispatch(addCartItem(item)),
    removeItem: () => dispatch(removeCartItem(item)),
    clearItem: () => dispatch(clearCartItem(item)),
  };
};

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = handlers(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
