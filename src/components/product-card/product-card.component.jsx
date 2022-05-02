import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addItemHandler = () => dispatch(addCartItem(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemHandler}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
