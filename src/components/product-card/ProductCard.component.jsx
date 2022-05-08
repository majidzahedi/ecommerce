import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

import { ProductCardContainer, Footer } from "./ProductCard.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, imageUrl } = product;
  const navigate = useNavigate();

  const addItemHandler = () => dispatch(addCartItem(product));
  const handleNavigate = () => navigate(`/shop/product${id}`);

  return (
    <ProductCardContainer>
      <img onClick={handleNavigate} src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemHandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
