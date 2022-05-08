import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category/Category";
import ProductDescryption from "../../components/product-description/ProductDescryption";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route path="/product:id" element={<ProductDescryption />} />
    </Routes>
  );
};

export default Shop;
