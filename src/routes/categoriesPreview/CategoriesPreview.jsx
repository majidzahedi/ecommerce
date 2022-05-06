import { useQuery } from "@apollo/client";
import { GETCATEGORIES } from "../../apollo/query";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { data } = useQuery(GETCATEGORIES);

  return (
    <>
      {!!data &&
        data.categories.map((category) => (
          <CategoryPreview key={category} category={category} />
        ))}
    </>
  );
};

export default CategoriesPreview;
