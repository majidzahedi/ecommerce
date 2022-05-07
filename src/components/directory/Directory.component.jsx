import DirectoryItem from "../directory-item/DirectoryItem.component";
import { DirectoryContainer } from "./Directory.styles.jsx";

const Directory = ({ categories }) => (
  <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
