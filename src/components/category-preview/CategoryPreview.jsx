import ProductCard from "../product-card/product-card.component";
import { GETPRODUCTS } from "../../apollo/query.js";
import { useQuery } from "@apollo/client";
import "./categoryPreview.styles.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ category }) => {
  const { data, loading, error } = useQuery(GETPRODUCTS, {
    variables: {
      skip: 0,
      take: 4,
    },
  });
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={category}>
          <span className="title">{category.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {data &&
          data.allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
