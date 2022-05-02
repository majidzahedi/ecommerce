import "./checkoutItem.styles.scss";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  removeCartItem,
} from "../../features/cart/cartSlice";

const handlers = (item) => {
  const dispatch = useDispatch();
  return {
    addItem: () => dispatch(addProduct(item)),
    removeItem: () => dispatch(removeProduct(item)),
    clearItem: () => dispatch(removeCartItem(item)),
  };
};

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = handlers(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeItem} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItem} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
