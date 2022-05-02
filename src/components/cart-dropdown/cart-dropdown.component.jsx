import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
