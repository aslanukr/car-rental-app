import Gallery from "src/components/Gallery/Gallery";
import { GallerySection } from "../Catalog/Catalog.styled";

import EmptyFavorites from "src/components/EmptyFavorites/EmptyFavorites";

import { selectFavTotal } from "src/redux/selectors";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoritesTotal = useSelector(selectFavTotal);

  return (
    <>
      {favoritesTotal === 0 ? (
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
