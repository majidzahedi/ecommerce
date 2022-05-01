import ShoppingIcon from "../../assets/shopping.svg?component";
import "./cart-icon.styles.scss";

import { useDispatch } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon-container" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
