import { FavoriteBtn, Image, ImageThumb } from "./CarImage.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "src/redux/favorites/favoritesSlice";
import { selectIfCarFavorite } from "src/redux/selectors";

const CarImage = ({ imageURL, alt, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIfCarFavorite(state, id));

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ carId: id }));
    } else {
      dispatch(addToFavorites({ carId: id }));
    }
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
