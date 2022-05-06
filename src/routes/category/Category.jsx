import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useQuery } from "@apollo/client";
import { GETPRODUCTS } from "../../apollo/query.js";
import "./category.styels.scss";

const Category = () => {
  const { category } = useParams();
  const { data, loading, error } = useQuery(GETPRODUCTS, {
    variables: {
      skip: 0,
      take: 10,
      filter: category,
    },
  });
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {data &&
          data.allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
