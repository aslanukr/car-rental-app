import { useEffect, useState } from "react";
import { FavoriteBtn, Image, ImageThumb } from "./CarImage.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "src/utilities/localStorage";

const CarImage = ({ imageURL, alt, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <ImageThumb>
      <Image src={imageURL} alt={alt} />
      <FavoriteBtn onClick={toggleFavorite}>
        {isFavorite ? (
          <AiFillHeart color="#3470ff" size={18} />
        ) : (
          <AiOutlineHeart color="#ffffff" size={18} />
        )}
      </FavoriteBtn>
    </ImageThumb>
  );
};

export default CarImage;
