import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETPRODUCTS } from "../../apollo/query.js";

import ProductCard from "../../components/product-card/ProductCard.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import Loading from "../../components/loading/loading";

const Category = () => {
  const { category } = useParams();
  const { data, loading, error } = useQuery(GETPRODUCTS, {
    variables: {
      skip: 0,
      take: 10,
      filter: category,
    },
  });

  if (loading) return <Loading />;

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {data &&
          data.allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
