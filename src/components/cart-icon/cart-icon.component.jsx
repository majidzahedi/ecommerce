import ShoppingIcon from "../../assets/shopping.svg?component";
import "./cart-icon.styles.scss";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";

const CartIcon = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);

  const dispatch = useDispatch();
  return (
    <div className="cart-icon-container" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
