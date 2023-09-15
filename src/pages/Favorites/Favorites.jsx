import Gallery from "src/components/Gallery/Gallery";
import { GallerySection } from "../Catalog/Catalog.styled";
import { getFavorites } from "src/utilities/localStorage";
import EmptyFavorites from "src/components/EmptyFavorites/EmptyFavorites";

const Favorites = () => {
  const favorites = getFavorites();

  return (
    <>
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <GallerySection>
          <Gallery renderFavorites />{" "}
        </GallerySection>
      )}
    </>
  );
};

export default Favorites;
