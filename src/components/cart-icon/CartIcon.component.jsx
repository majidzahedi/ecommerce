import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";

const CartIcon = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);

  const dispatch = useDispatch();
  return (
    <CartIconContainer onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
