import { Link } from "react-router-dom";
import { GETPRODUCTS } from "../../apollo/query.js";
import { useQuery } from "@apollo/client";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./CategoryPreview.styles";
import ProductCard from "../product-card/ProductCard.component";

const CategoryPreview = ({ category }) => {
  const { data, loading, error } = useQuery(GETPRODUCTS, {
    variables: {
      skip: 0,
      take: 4,
      filter: category,
    },
  });
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={category}>
          <Title>{category.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {data &&
          data.allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
