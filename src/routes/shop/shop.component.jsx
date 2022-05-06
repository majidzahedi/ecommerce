import { useQuery } from "@apollo/client";
import ProductCard from "../../components/product-card/product-card.component";
import Loading from "../../components/loading/loading";
import "./shop.styles.scss";
import { GETPRODUCTS } from "../../apollo/query";
import { useParams } from "react-router-dom";

const Shop = () => {
  const param = useParams();
  const { data, loading, error } = useQuery(GETPRODUCTS, {
    variables: {
      skip: 0,
      take: 10,
      filter: !!param.category ? param.category.slice(0, -1) : undefined,
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>error</p>;

  return (
    <div className="products-container">
      {data &&
        data.allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Shop;
