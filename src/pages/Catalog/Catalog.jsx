import Gallery from "src/components/Gallery/Gallery";
import { FilterSection, GallerySection } from "./Catalog.styled";

const Catalog = () => {
  return (
    <>
      <FilterSection>Filter</FilterSection>
      <GallerySection>
        <Gallery />
      </GallerySection>
    </>
  );
};

export default Catalog;
