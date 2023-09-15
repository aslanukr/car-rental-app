import Gallery from "src/components/Gallery/Gallery";
import { GallerySection } from "../Catalog/Catalog.styled";

import EmptyFavorites from "src/components/EmptyFavorites/EmptyFavorites";
import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/selectors";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <GallerySection>
          <Gallery renderFavorites />
        </GallerySection>
      )}
    </>
  );
};

export default Favorites;
